import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }
}
