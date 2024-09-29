import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsService {
  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }
}
