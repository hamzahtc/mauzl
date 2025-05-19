import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ProductDto } from '~products/dto/product.dto';
import { UserDto } from '~users/dto/user.dto';

export class WishlistDto {
  @Expose()
  @ApiProperty()
  user: UserDto;

  @Expose()
  @ApiProperty()
  @ApiProperty({ type: [ProductDto] })
  products: ProductDto[];
}
