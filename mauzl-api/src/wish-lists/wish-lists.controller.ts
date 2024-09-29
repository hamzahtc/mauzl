import { Controller, Get, Param } from '@nestjs/common';
import { WishListsService } from './wish-lists.service';

@Controller('wish-lists')
export class WishListsController {
  constructor(private readonly wishListsService: WishListsService) {}

  @Get()
  findAll() {
    return this.wishListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishListsService.findOne(+id);
  }
}
