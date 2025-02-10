import { plainToInstance } from 'class-transformer';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

export class UserMapper {
  static toDto(user: User): UserDto {
    return plainToInstance(UserDto, user, {
      excludeExtraneousValues: true,
    });
  }

  static toEntity(userDto: UserDto): User {
    return plainToInstance(User, userDto, {
      excludeExtraneousValues: true,
    });
  }

  static toDtoArray(categories: User[]): UserDto[] {
    return categories.map((user) => this.toDto(user));
  }

  static toEntityArray(userDtos: UserDto[]): User[] {
    return userDtos.map((userDto) => this.toEntity(userDto));
  }
}
