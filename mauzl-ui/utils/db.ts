import { SizeType } from "@/common/contants";
import { ProductDto } from "@/models";
import Dexie, { EntityTable } from "dexie";

export interface OrderItem {
  product: ProductDto;
  size: SizeType;
  quantity: number;
  productId: number;
}

const db = new Dexie("mauzl-db") as Dexie & {
  products: EntityTable<OrderItem>;
};

// Define the schema for OrderItem
db.version(1).stores({
  products: "[productId+size], productId, size, quantity", // Assuming 'product.id' will serve as the unique identifier
});

export { db };
