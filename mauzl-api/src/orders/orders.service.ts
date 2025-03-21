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
import { OrderDto } from './dto/order.dto';
import { OrderMapper } from './order.mapper';
import { render } from '@react-email/render';
import OrderConfirmationEmail from '~email/templates/OrderConfirmationEmail';
import { EmailService } from '~email/email.service';
import { ImageService } from '~images/image.service';

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

    private imageService: ImageService,
    private emailService: EmailService,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderDto> {
    const address = this.addressRepository.create({
      ...createOrderDto.address,
    });

    const client = this.clientRepository.create({
      ...createOrderDto.client,
      address: address,
    });

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
          size: item.size,
        });
      }),
    );

    const order = this.orderRepository.create({
      client: client,
      items: orderItems,
      totalAmount: orderItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    });

    const savedOrder = await this.orderRepository.save(order);
    this.sendOrderConfirmation(client.email);

    return OrderMapper.toDto(savedOrder);
  }

  async findAll(): Promise<OrderDto[]> {
    const orders = await this.orderRepository.find({
      relations: [
        'client',
        'client.address',
        'items',
        'items.product',
        'items.product.category',
      ],
    });

    return OrderMapper.toDtoArray(orders);
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

  async sendOrderConfirmation(to: string) {
    const imageUrl = await this.imageService.getImageLink(
      '1eb3e0750d9ac5ad631eb93ab7825350.jpg',
    );
    const emailHtml = await render(
      OrderConfirmationEmail({
        orderDetails: {
          trackingNumber: 'mauzl_1ZV218970300071628',
          orderNumber: 'mauzl_C0106373851',
          orderDate: new Date().toLocaleDateString(),
          products: [
            {
              name: 'Product 1',
              image: imageUrl,
              id: 'product_id',
              color: 'black',
              size: 'M',
            },
          ],
        },
      }),
    );

    return this.emailService.sendEmail(
      to,
      'Your Order Confirmation',
      emailHtml,
    );
  }
}
