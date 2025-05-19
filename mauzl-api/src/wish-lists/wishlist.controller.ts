import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { WishListsService } from './wishlist.service';
import {
  AddWishlistProductsDto,
  CreateWishlistProductDto,
} from './dto/create-wishlist.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { WishlistDto } from './dto/wishlist.dto';
import { Authenticated } from '~auth/decoretors/authenticated.decorator';

@Authenticated()
@Controller('wishlists')
export class WishListsController {
  constructor(private readonly wishListsService: WishListsService) {}

  @Post()
  create(@Req() req, @Body() wishlistUserDto: CreateWishlistProductDto) {
    const currentUserId = req.user.id;
    return this.wishListsService.createWishlistProduct(
      currentUserId,
      wishlistUserDto,
    );
  }

  @Post('multiple')
  addMultiple(
    @Req() req,
    @Body() addWishlistProductsDto: AddWishlistProductsDto,
  ) {
    const currentUserId = req.user.id;
    return this.wishListsService.addMultipleProducts(
      currentUserId,
      addWishlistProductsDto,
    );
  }

  @Delete(':id')
  removeFromWishlist(@Param('id') productId: number) {
    return this.wishListsService.removeFromWishlist(productId);
  }

  @Get()
  @ApiOkResponse({ type: WishlistDto })
  findOne(@Req() req): Promise<WishlistDto> {
    const currentUserId = req.user.id;
    return this.wishListsService.findOne(currentUserId);
  }
}
