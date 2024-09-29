import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderItemsService {
  findAll() {
    return `This action returns all orderItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
