import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @ApiProperty()
  addressLine: string;

  @ApiProperty()
  city: string;
}
