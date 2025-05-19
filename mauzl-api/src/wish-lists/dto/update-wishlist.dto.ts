import { PartialType } from '@nestjs/swagger';
import { CreateWishlistProductDto } from './create-wishlist.dto';

export class UpdateWishlistDto extends PartialType(CreateWishlistProductDto) {}
