import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { AddressDto } from '~addresses/dto/address.dto';

export class ClientDto {
  @Expose()
  @ApiProperty()
  firstName: string;

  @Expose()
  @ApiProperty()
  lastName: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  phoneNumber: number;

  @Expose()
  @ApiProperty()
  address: AddressDto;
}
