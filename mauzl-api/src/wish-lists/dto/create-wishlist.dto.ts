import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ProductDto } from '~products/dto/product.dto';

export class CreateWishlistProductDto {
  @Expose()
  @ApiProperty()
  product: ProductDto;
}

export class AddWishlistProductsDto {
  @Expose()
  @ApiProperty()
  productIds: number[];
}
