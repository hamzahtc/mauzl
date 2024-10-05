export interface ProductFilterDto {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  categoryId?: number;
  sortBy?: SortType;
  statuses?: string;
}

export type SortType = 'newest' | 'lowToHigh' | 'highToLow';
