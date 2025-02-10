export class CreateUserDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  avatarUrl: string;
  password: string;
  addressIds?: number[]; // User's addresses
}
