import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsService {
  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }
}
