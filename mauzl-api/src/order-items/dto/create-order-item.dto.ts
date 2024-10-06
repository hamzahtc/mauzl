import { ApiProperty } from '@nestjs/swagger';
import { SizeType } from '~order-items/order-item.util';

export class CreateOrderItemDto {
  @ApiProperty()
  productId: number;

  @ApiProperty()
  size: SizeType;

  @ApiProperty()
  quantity: number;
}
