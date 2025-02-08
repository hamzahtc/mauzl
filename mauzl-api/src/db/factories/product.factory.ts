import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Product } from '~products/entities/product.entity';
import { ProductStatus } from '~products/product.util';

export const ProductFactory = setSeederFactory(Product, () => {
  const product = new Product();
  product.name = faker.lorem.word();
  product.description = faker.lorem.sentence();
  product.price = faker.number.int({ min: 0, max: 999 });
  product.stock = faker.number.int({ min: 0, max: 100 });
  product.status = faker.helpers.arrayElement(Object.values(ProductStatus));
  return product;
});
