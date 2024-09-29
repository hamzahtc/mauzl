import { Injectable } from '@nestjs/common';

@Injectable()
export class WishListsService {
  findAll() {
    return `This action returns all wishLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wishList`;
  }
}
