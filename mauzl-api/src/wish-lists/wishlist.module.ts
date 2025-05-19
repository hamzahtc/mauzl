import { Module } from '@nestjs/common';
import { WishListsService } from './wishlist.service';
import { WishListsController } from './wishlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { Product } from '~products/entities/product.entity';
import { ProductMapper } from '~products/product.mapper';
import { CategoryMapper } from '~categories/category.mapper';
import { AuthModule } from '~auth/auth.module';
import { ImageService } from '~images/image.service';
import { MinioClientModule } from '~minio-client/minio-client.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, Wishlist]),
    AuthModule,
    MinioClientModule,
  ],
  controllers: [WishListsController],
  providers: [WishListsService, ImageService, ProductMapper, CategoryMapper],
})
export class WishListsModule {}
