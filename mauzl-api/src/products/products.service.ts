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
import { ProductDto } from './dto/product.dto';
import { ImageService } from '~images/image.service';
import { ProductMapper } from './product.mapper';

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
    private imageService: ImageService,
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

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit;

    const [products, total] = await this.productRepository.findAndCount({
      relations: ['category', 'images'],
      take: limit,
      skip: offset,
    });

    const productDtos = ProductMapper.toDtoArray(products);
    await Promise.all(
      productDtos.map(async (product) => {
        product.images = await Promise.all(
          product.images.map((image) => this.imageService.getImageLink(image)),
        );
      }),
    );
    return { products: productDtos, total };
  }

  async findOne(id: number): Promise<ProductDto> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['category', 'images'],
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    const productDto = ProductMapper.toDto(product);
    productDto.images = await Promise.all(
      productDto.images.map((image) => this.imageService.getImageLink(image)),
    );
    return productDto;
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
