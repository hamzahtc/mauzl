import { ApiProperty } from '@nestjs/swagger';
import { CreateAddressDto } from '~addresses/dto/create-address.dto';
import { CreateClientDto } from '~clients/dto/create-client.dto';
import { CreateOrderItemDto } from '~order-items/dto/create-order-item.dto';

export class CreateOrderDto {
  @ApiProperty({ type: [CreateOrderItemDto] })
  items: CreateOrderItemDto[];

  @ApiProperty()
  client: CreateClientDto;

  @ApiProperty()
  address: CreateAddressDto;
}
