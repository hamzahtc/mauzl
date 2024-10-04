import { ApiProperty } from '@nestjs/swagger';
import { OrderDto } from './order.dto';

export class PaginatedOrderDto {
  @ApiProperty({ type: [OrderDto] })
  products: OrderDto[];
}
