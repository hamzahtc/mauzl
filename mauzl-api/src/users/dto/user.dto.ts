import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Role } from '~auth/enums/role.enum';

export class UserDto {
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  role: Role;

  @Expose()
  @ApiProperty()
  firstName: string;
  @Expose()
  @ApiProperty()
  lastName: string;

  @Expose()
  @ApiProperty()
  username: string;

  @Expose()
  @ApiProperty()
  email: string;

  @Expose()
  @ApiProperty()
  avatarUrl: string;

  @Expose()
  @ApiProperty()
  hashedRefreshToken: string;
}
