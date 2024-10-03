import { plainToInstance } from 'class-transformer';
import { Product } from './entities/product.entity';
import { ProductDto } from './dto/product.dto';
import { ProductImage } from '~product-images/entities/product-image.entity';
import { CategoryMapper } from '~categories/category.mapper';

export class ProductMapper {
  static toDto(product: Product): ProductDto {
    const productDto = plainToInstance(ProductDto, product, {
      excludeExtraneousValues: true,
    });

    productDto.category = CategoryMapper.toDto(product.category);
    productDto.images = product.images.map((image: ProductImage) => image.name);

    return productDto;
  }

  static toEntity(productDto: ProductDto): Product {
    const product = plainToInstance(Product, productDto, {
      excludeExtraneousValues: true,
    });

    return product;
  }

  static toDtoArray(products: Product[]): ProductDto[] {
    return products.map((product) => this.toDto(product));
  }

  static toEntityArray(productDtos: ProductDto[]): Product[] {
    return productDtos.map((productDto) => this.toEntity(productDto));
  }
}
