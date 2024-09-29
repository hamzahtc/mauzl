import { Module } from '@nestjs/common';
import { WishListsService } from './wish-lists.service';
import { WishListsController } from './wish-lists.controller';

@Module({
  controllers: [WishListsController],
  providers: [WishListsService],
})
export class WishListsModule {}
