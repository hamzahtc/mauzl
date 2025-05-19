import { Injectable, NotFoundException } from '@nestjs/common';
import { WishlistDto } from './dto/wishlist.dto';
import {
  AddWishlistProductsDto,
  CreateWishlistProductDto,
} from './dto/create-wishlist.dto';
import { In, Repository } from 'typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { WishlistMapper } from './wishlist.mapper';
import { Product } from '~products/entities/product.entity';
import { OptionalAuthExtractor } from '~auth/helper/get-optional-user';
import { ImageService } from '~images/image.service';

@Injectable()
export class WishListsService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: Repository<Wishlist>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private imageService: ImageService,
    private readonly optionalAuthExtractor: OptionalAuthExtractor,
  ) {}

  async createWishlistProduct(
    userId: number,
    createWishlistProductDto: CreateWishlistProductDto,
  ): Promise<WishlistDto> {
    let wishlist = await this.wishlistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['products', 'products.images', 'products.category'],
    });

    if (!wishlist) {
      wishlist = await this.wishlistRepository.save({
        user: { id: userId },
        products: [],
      });
    }
    const product = await this.productRepository.findOne({
      where: { id: createWishlistProductDto.product.id },
      relations: ['category', 'images'],
    });

    if (!product) {
      throw new NotFoundException(
        `Product with ID ${createWishlistProductDto.product.id} not found`,
      );
    }

    wishlist.products.push(product);

    wishlist = await this.wishlistRepository.save(wishlist);
    return WishlistMapper.toDto(wishlist);
  }

  // wishlist.service.ts
  async addMultipleProducts(
    userId: number,
    addWishlistProductsDto: AddWishlistProductsDto,
  ): Promise<WishlistDto> {
    // Find or create the user's wishlist
    let wishlist = await this.wishlistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['products', 'products.images', 'products.category'],
    });

    if (!wishlist) {
      wishlist = await this.wishlistRepository.save({
        user: { id: userId },
        products: [],
      });
    }

    // Find all products that exist in the database
    const products = await this.productRepository.find({
      where: { id: In(addWishlistProductsDto.productIds) },
      relations: ['category', 'images'],
    });

    // Check if all requested products were found
    const foundIds = products.map((p) => p.id);
    const missingIds = addWishlistProductsDto.productIds.filter(
      (id) => !foundIds.includes(Number(id)),
    );

    if (missingIds.length > 0) {
      throw new NotFoundException(
        `Products with IDs ${missingIds.join(', ')} not found`,
      );
    }

    // Filter out products that are already in the wishlist
    const existingProductIds = wishlist.products.map((p) => p.id);
    const newProducts = products.filter(
      (p) => !existingProductIds.includes(Number(p.id)),
    );

    // Add new products to the wishlist
    wishlist.products.push(...newProducts);

    // Save the updated wishlist
    const updatedWishlist = await this.wishlistRepository.save(wishlist);

    return WishlistMapper.toDto(updatedWishlist);
  }

  async removeFromWishlist(productId: number): Promise<WishlistDto> {
    // Find the user's wishlist
    const { id } = await this.optionalAuthExtractor.getCurrentUser();

    const wishlist = await this.wishlistRepository.findOne({
      where: { user: { id } },
      relations: ['products', 'products.images', 'products.category'],
    });

    if (!wishlist) {
      throw new NotFoundException(`Wishlist for user ID ${id} not found`);
    }

    const numericProductId = Number(productId);

    // Check if product exists in wishlist
    const productIndex = wishlist.products.findIndex(
      (product) => product.id === numericProductId,
    );

    if (productIndex === -1) {
      throw new NotFoundException(
        `Product with ID ${productId} not found in wishlist`,
      );
    }

    // Remove the product from the array
    wishlist.products.splice(productIndex, 1);

    // Save the updated wishlist
    const updatedWishlist = await this.wishlistRepository.save(wishlist);

    return WishlistMapper.toDto(updatedWishlist);
  }

  async findOne(userId: number): Promise<WishlistDto> {
    const wishlist = await this.wishlistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['products', 'products.images', 'products.category'],
    });
    if (!wishlist) {
      return null;
    }

    const wishlistDto = WishlistMapper.toDto(wishlist);
    await Promise.all(
      wishlistDto.products.map(async (product) => {
        product.images = await Promise.all(
          product.images.map((image) => this.imageService.getImageLink(image)),
        );
      }),
    );

    wishlistDto.products.forEach((product) => {
      product.isInWishlist = true;
    });

    return wishlistDto;
  }
}
