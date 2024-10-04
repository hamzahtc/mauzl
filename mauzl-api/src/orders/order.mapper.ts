import { plainToInstance } from 'class-transformer';
import { Order } from './entities/order.entity';
import { OrderDto } from './dto/order.dto';
import { OrderItemMapper } from '~order-items/order-item.mapper';
import { ClientMapper } from '~clients/client.mapper';

export class OrderMapper {
  static toDto(order: Order): OrderDto {
    const orderDto = plainToInstance(OrderDto, order, {
      excludeExtraneousValues: true,
    });
    orderDto.client = ClientMapper.toDto(order.client);
    orderDto.items = OrderItemMapper.toDtoArray(order.items);

    return orderDto;
  }

  static toDtoArray(orders: Order[]): OrderDto[] {
    return orders.map((order) => this.toDto(order));
  }
}
