export enum ProductStatus {
  IN_STOCK = 'IN_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  LIMITED_STOCK = 'LIMITED_STOCK',
  ON_SALE = 'ON_SALE',
  COMING_SOON = 'COMING_SOON',
}

export const statues = {
  inStock: ProductStatus.IN_STOCK,
  outOfStock: ProductStatus.OUT_OF_STOCK,
  limitedStock: ProductStatus.LIMITED_STOCK,
  onSale: ProductStatus.ON_SALE,
  comingSoon: ProductStatus.COMING_SOON,
};

export type ProductStatusType = keyof typeof ProductStatus;
