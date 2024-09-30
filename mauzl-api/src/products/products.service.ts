import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductImage } from '~product-images/entities/product-image.entity';
import { Category } from '~categories/entities/category.entity';
import { MinioClientService } from '~minio-client/minio-client.service';
import { BufferedFile } from '~minio-client/file.model';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private minioClientService: MinioClientService,
    @InjectMapper()
    private readonly mapper: Mapper,
  ) {
    this.logger = new Logger('ProductService');
  }
  private readonly logger: Logger;

  async create(
    createProductDto: CreateProductDto,
    files: BufferedFile[],
  ): Promise<Product> {
    const category = await this.categoryRepository.findOne({
      where: { id: createProductDto.categoryId },
    });

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    const product = this.productRepository.create({
      ...createProductDto,
      category,
    });

    const savedProduct = await this.productRepository.save(product);

    const images: ProductImage[] = [];
    for (const file of files) {
      const imageUrl = await this.minioClientService.upload(file);

      const productImage = this.productImageRepository.create({
        name: imageUrl,
        product: savedProduct,
      });

      images.push(productImage);
    }

    await this.productImageRepository.save(images);
    return savedProduct;
  }

  async findAll(): Promise<ProductDto[]> {
    const products = await this.productRepository.find({
      relations: ['category'],
    });
    return this.mapper.mapArray(products, Product, ProductDto);
  }

  async findOne(id: number): Promise<ProductDto> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['category', 'images'],
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return this.mapper.map(product, Product, ProductDto);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductDto> {
    await this.productRepository.update(id, updateProductDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
