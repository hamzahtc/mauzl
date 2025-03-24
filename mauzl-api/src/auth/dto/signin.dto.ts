import { ApiProperty } from '@nestjs/swagger';

export class SigninDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
