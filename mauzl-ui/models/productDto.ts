/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Mauzl API
 * OpenAPI spec version: 1.0.0
 */
import type { CategoryDto } from "./categoryDto";

export interface ProductDto {
  additionalInfos: string[];
  category: CategoryDto;
  description: string;
  id: number;
  images: string[];
  isInWishlist: boolean;
  name: string;
  price: number;
  status: string;
  stock: number;
}
