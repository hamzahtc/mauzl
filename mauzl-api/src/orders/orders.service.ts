import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Client } from '~clients/entities/client.entity';
import { Address } from '~addresses/entities/address.entity';
import { OrderItem } from '~order-items/entities/order-item.entity';
import { Product } from '~products/entities/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepository: Repository<OrderItem>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const address = this.addressRepository.create({
      ...createOrderDto.address,
    });

    // const savedAddress = await this.addressRepository.save(address);

    const client = this.clientRepository.create({
      ...createOrderDto.client,
      address: address,
    });
    // const savedClient = await this.clientRepository.save(client);

    const orderItems: OrderItem[] = await Promise.all(
      createOrderDto.items.map(async (item) => {
        const product = await this.productRepository.findOne({
          where: { id: item.productId },
        });
        if (!product) {
          throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);
        }
        return this.orderItemRepository.create({
          product,
          quantity: item.quantity,
          price: product.price,
        });
      }),
    );

    // const savedOrderItems = this.orderItemRepository.save(orderItems);

    const order = this.orderRepository.create({
      client: client,
      items: orderItems,
      totalAmount: orderItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    });

    return this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user', 'items'] });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['user', 'items'],
    });
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
    return order;
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.orderRepository.update(id, updateOrderDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}