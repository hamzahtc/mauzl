import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ContactSubject } from '~contact/contact.util';

export class ContactDto {
  @Expose()
  @ApiProperty()
  id: number;

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
  phoneNumber: string;

  @Expose()
  @ApiProperty()
  subject: ContactSubject;

  @Expose()
  @ApiProperty()
  message: string;
}
