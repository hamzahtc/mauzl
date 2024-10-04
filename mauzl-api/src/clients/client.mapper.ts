import { plainToInstance } from 'class-transformer';
import { ClientDto } from './dto/client.dto';
import { Client } from './entities/client.entity';
import { AddressMapper } from '~addresses/address.mapper';

export class ClientMapper {
  static toDto(client: Client): ClientDto {
    const clientDto = plainToInstance(ClientDto, client, {
      excludeExtraneousValues: true,
    });
    clientDto.address = AddressMapper.toDto(client.address);

    return clientDto;
  }

  static toEntity(clientDto: ClientDto): Client {
    return plainToInstance(Client, clientDto, {
      excludeExtraneousValues: true,
    });
  }

  static toDtoArray(clientes: Client[]): ClientDto[] {
    return clientes.map((client) => this.toDto(client));
  }

  static toEntityArray(clientDtos: ClientDto[]): Client[] {
    return clientDtos.map((clientDto) => this.toEntity(clientDto));
  }
}
