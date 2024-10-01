import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let service: CategoriesService;
  let categoryRepository: Repository<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useClass: Repository,
        },
        {
          provide: 'automapper:nestjs:default',
          useValue: {
            createMap: jest.fn(),
            forMember: jest.fn(),
            mapFrom: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
    service = module.get<CategoriesService>(CategoriesService);
    categoryRepository = module.get<Repository<Category>>(
      getRepositoryToken(Category),
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
    expect(categoryRepository).toBeDefined();
  });
});
