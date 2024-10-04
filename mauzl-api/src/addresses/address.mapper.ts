import { plainToInstance } from 'class-transformer';
import { Address } from './entities/address.entity';
import { AddressDto } from './dto/address.dto';

export class AddressMapper {
  static toDto(address: Address): AddressDto {
    return plainToInstance(AddressDto, address, {
      excludeExtraneousValues: true,
    });
  }

  static toEntity(addressDto: AddressDto): Address {
    return plainToInstance(Address, addressDto, {
      excludeExtraneousValues: true,
    });
  }

  static toDtoArray(addresses: Address[]): AddressDto[] {
    return addresses.map((address) => this.toDto(address));
  }

  static toEntityArray(addressDtos: AddressDto[]): Address[] {
    return addressDtos.map((addressDto) => this.toEntity(addressDto));
  }
}
