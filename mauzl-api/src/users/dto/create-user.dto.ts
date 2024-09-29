export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  addressIds: number[]; // User's addresses
}
