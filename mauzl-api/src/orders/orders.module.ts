import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from '~order-items/entities/order-item.entity';
import { Client } from '~clients/entities/client.entity';
import { Address } from '~addresses/entities/address.entity';
import { Product } from '~products/entities/product.entity';
import { EmailService } from '~email/email.service';
import { ImageService } from '~images/image.service';
import { MinioClientModule } from '~minio-client/minio-client.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem, Client, Address, Product]),
    MinioClientModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, EmailService, ImageService],
})
export class OrdersModule {}
