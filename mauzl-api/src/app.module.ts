import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createDataSource } from './db/data-source';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { PaymentsModule } from './payments/payments.module';
import { WishListsModule } from './wish-lists/wish-lists.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ClientsModule } from './clients/clients.module';
import { MinioClientModule } from './minio-client/minio-client.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ImageModule } from './images/image.module';
import { AddressesModule } from '~addresses/addresses.module';
import { AuthModule } from '~auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        createDataSource(configService),
      inject: [ConfigService],
    }),
    UsersModule,
    CategoriesModule,
    ProductsModule,
    OrdersModule,
    OrderItemsModule,
    PaymentsModule,
    WishListsModule,
    ReviewsModule,
    ClientsModule,
    AddressesModule,
    MinioClientModule,
    ImageModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
