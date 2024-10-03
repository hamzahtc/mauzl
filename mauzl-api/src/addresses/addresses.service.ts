import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressesService {
  findAll() {
    return `This action returns all addresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
