import { faker } from '@faker-js/faker';
import { setSeederFactory } from 'typeorm-extension';
import { User } from '~users/entities/user.entity';

export const UserFactory = setSeederFactory(User, () => {
  const user = new User();
  user.username = faker.internet.username();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  return user;
});
