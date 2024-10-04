import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ClientDto } from '~clients/dto/client.dto';
import { OrderItemDto } from '~order-items/dto/order-item.dto';

export class OrderDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  status: string;

  @Expose()
  @ApiProperty()
  totalAmount: number;

  @Expose()
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @ApiProperty()
  @ApiProperty({ type: [OrderItemDto] })
  items: OrderItemDto[];

  @Expose()
  @ApiProperty()
  client: ClientDto;
}
