import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { Category } from '~categories/entities/category.entity';
import { Product } from '~products/entities/product.entity';
import { User } from '~users/entities/user.entity';

export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userRepository = dataSource.getRepository(User);
    const categoryRepository = dataSource.getRepository(Category);
    const productRepository = dataSource.getRepository(Product);

    const userFactory = factoryManager.get(User);
    const categoryFactory = factoryManager.get(Category);
    const productFactory = factoryManager.get(Product);

    const users = await userFactory.saveMany(7);
    const categories = await categoryFactory.saveMany(3);

    userRepository.save(users);
    const savedCategories = await categoryRepository.save(categories);

    const products: Product[] = [];
    for (const category of savedCategories) {
      const categoryProducts = await productFactory.saveMany(2, { category });
      products.push(...categoryProducts);
    }

    await productRepository.save(products);
  }
}
