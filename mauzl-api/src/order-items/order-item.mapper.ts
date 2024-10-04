import { plainToInstance } from 'class-transformer';
import { OrderItem } from './entities/order-item.entity';
import { OrderItemDto } from './dto/order-item.dto';
import { CategoryMapper } from '~categories/category.mapper';

export class OrderItemMapper {
  static toDto(orderItem: OrderItem): OrderItemDto {
    const orderItemDto = plainToInstance(OrderItemDto, orderItem, {
      excludeExtraneousValues: true,
    });

    orderItemDto.name = orderItem.product.name;
    orderItemDto.price = orderItem.product.price;
    orderItemDto.category = CategoryMapper.toDto(orderItem.product.category);

    return orderItemDto;
  }

  static toEntity(orderItemDto: OrderItemDto): OrderItem {
    return plainToInstance(OrderItem, orderItemDto, {
      excludeExtraneousValues: true,
    });
  }

  static toDtoArray(orderItems: OrderItem[]): OrderItemDto[] {
    return orderItems.map((orderItem) => this.toDto(orderItem));
  }

  static toEntityArray(orderItemDtos: OrderItemDto[]): OrderItem[] {
    return orderItemDtos.map((orderItemDto) => this.toEntity(orderItemDto));
  }
}
