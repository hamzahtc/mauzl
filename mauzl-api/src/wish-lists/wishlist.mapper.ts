import { plainToInstance } from 'class-transformer';
import { Wishlist } from './entities/wishlist.entity';
import { WishlistDto } from './dto/wishlist.dto';
import { UserMapper } from '~users/user.mapper';
import { ProductMapper } from '~products/product.mapper';

export class WishlistMapper {
  static toDto(wishlist: Wishlist): WishlistDto {
    const wishlistDto = plainToInstance(WishlistDto, wishlist, {
      excludeExtraneousValues: true,
    });

    wishlistDto.user = UserMapper.toDto(wishlist.user);
    wishlistDto.products = ProductMapper.toDtoArray(wishlist.products);

    return wishlistDto;
  }

  static toEntity(wishlistDto: WishlistDto): Wishlist {
    return plainToInstance(Wishlist, wishlistDto, {
      excludeExtraneousValues: true,
    });
  }

  static toDtoArray(categories: Wishlist[]): WishlistDto[] {
    return categories.map((wishlist) => this.toDto(wishlist));
  }

  static toEntityArray(wishlistDtos: WishlistDto[]): Wishlist[] {
    return wishlistDtos.map((wishlistDto) => this.toEntity(wishlistDto));
  }
}
