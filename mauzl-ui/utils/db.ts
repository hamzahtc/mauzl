import { SizeType } from "@/common/contants";
import { ProductDto } from "@/models";
import Dexie, { EntityTable } from "dexie";

export interface OrderItem {
  product: ProductDto;
  size: SizeType;
  quantity: number;
  productId: number;
}

export interface WishlistItem {
  product: ProductDto;
  productId: number;
  addedAt: Date;
}

const db = new Dexie("mauzl-db") as Dexie & {
  products: EntityTable<OrderItem>;
  wishlist: EntityTable<WishlistItem>;
};

// Define the schema for OrderItem
db.version(1).stores({
  products: "[productId+size], productId, size, quantity", // Assuming 'product.id' will serve as the unique identifier
  wishlist: "productId, addedAt", // Primary key is productId, indexed by addedAt
});

export { db };
