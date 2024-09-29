export class CreateOrderDto {
  items: { productId: number; quantity: number }[];
  client: { username: string; email: string; phoneNumber: string };
  address: { addressLine: string; city: string };
}
