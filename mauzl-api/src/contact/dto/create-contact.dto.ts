import { ApiProperty } from '@nestjs/swagger';
import { ContactSubject } from '~contact/contact.util';

export class CreateContactDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  subject: ContactSubject;

  @ApiProperty()
  message: string;
}
