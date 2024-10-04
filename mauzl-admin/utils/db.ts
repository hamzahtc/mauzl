import { ProductDto } from "@/models";
import Dexie, { EntityTable } from "dexie";

const db = new Dexie("mauzl-db") as Dexie & {
  products: EntityTable<ProductDto, "id">;
};

db.version(1).stores({
  products: "++id, name, price, category.name",
});

export { db };
