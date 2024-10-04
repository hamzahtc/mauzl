import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class AddressDto {
  @Expose()
  @ApiProperty()
  addressLine: string;

  @Expose()
  @ApiProperty()
  city: string;

  @Expose()
  @ApiProperty()
  email: string;
}
