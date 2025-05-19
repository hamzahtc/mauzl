import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, ILike, In, Repository } from 'typeorm';
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
import { ProductFilterDto } from './dto/product-filter.dto';
import { statues } from './product.util';
import { Wishlist } from '~wish-lists/entities/wishlist.entity';
import { OptionalAuthExtractor } from '~auth/helper/get-optional-user';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private readonly productImageRepository: Repository<ProductImage>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: Repository<Wishlist>,
    private minioClientService: MinioClientService,
    private imageService: ImageService,
    private readonly optionalAuthExtractor: OptionalAuthExtractor,
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

  async findAll(page: number, limit: number, filters: ProductFilterDto) {
    const offset = (page - 1) * limit;
    const statusArray = filters.statuses ? filters.statuses.split(',') : [];

    const whereConditions: any = {};

    if (filters.name) {
      whereConditions.name = ILike(`%${filters.name}%`);
    }

    if (filters.minPrice && filters.maxPrice) {
      whereConditions.price = Between(filters.minPrice, filters.maxPrice);
    }

    if (filters.categoryId) {
      whereConditions.category = { id: filters.categoryId };
    }

    if (filters.statuses && statusArray.length > 0) {
      const statusesValues = statusArray.map((status) => statues[status]);
      whereConditions.status = In(statusesValues);
    }

    const order: any = {};
    switch (filters.sortBy) {
      case 'newest':
        order.createdAt = 'DESC'; // Assuming you have a 'createdAt' field
        break;
      case 'lowToHigh':
        order.price = 'ASC';
        break;
      case 'highToLow':
        order.price = 'DESC';
        break;
      default:
        // No specific sorting
        break;
    }

    const [products, total] = await this.productRepository.findAndCount({
      where: whereConditions,
      relations: ['category', 'images'],
      take: limit,
      skip: offset,
      order,
    });

    const productDtos = ProductMapper.toDtoArray(products);

    await Promise.all(
      productDtos.map(async (product) => {
        product.images = await Promise.all(
          product.images.map((image) => this.imageService.getImageLink(image)),
        );
      }),
    );

    let wishlistProductIds: number[] = [];

    const currentUser = await this.optionalAuthExtractor.getCurrentUser();
    if (currentUser) {
      const wishlist = await this.wishlistRepository.findOne({
        where: { user: { id: currentUser.id } },
        relations: ['products'],
      });
      wishlistProductIds = wishlist?.products?.map((p) => p.id) || [];
    }

    productDtos.forEach((product) => {
      product.isInWishlist = wishlistProductIds.includes(product.id);
    });

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
