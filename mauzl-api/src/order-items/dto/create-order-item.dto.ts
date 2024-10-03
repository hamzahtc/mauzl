import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;
}
