import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductImage } from '~product-images/entities/product-image.entity';
import { Category } from '~categories/entities/category.entity';
import { MinioClientModule } from '~minio-client/minio-client.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductImage, Category]),
    MinioClientModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
