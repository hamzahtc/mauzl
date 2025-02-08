import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { Category } from '~categories/entities/category.entity';

export const CategoryFactory = setSeederFactory(Category, () => {
  const category = new Category();
  category.name = faker.lorem.word();
  return category;
});
