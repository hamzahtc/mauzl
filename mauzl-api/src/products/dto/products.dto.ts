import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from './product.dto';

export class PaginatedProductDto {
  @ApiProperty({ type: [ProductDto] })
  products: ProductDto[];

  @ApiProperty({ description: 'Total number of products' })
  total: number;
}
