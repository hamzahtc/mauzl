import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { CategoryDto } from '~categories/dto/category.dto';
import { ProductStatusType } from '~products/product.util';

export class ProductDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  name: string;

  @Expose()
  @ApiProperty()
  description: string;

  @Expose()
  @ApiProperty()
  price: number;

  @Expose()
  @ApiProperty()
  stock: number;

  @Expose()
  @ApiProperty()
  status: ProductStatusType;

  @Expose()
  @ApiProperty()
  category: CategoryDto;

  @Expose()
  @ApiProperty()
  images: string[];
}
