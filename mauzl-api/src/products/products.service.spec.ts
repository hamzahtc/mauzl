import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { MinioClientService } from '~minio-client/minio-client.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Category } from '~categories/entities/category.entity';
import { ProductImage } from '~product-images/entities/product-image.entity';
import { Product } from './entities/product.entity';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(ProductImage),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Category),
          useClass: Repository,
        },
        {
          provide: MinioClientService,
          useValue: {
            uploadFile: jest.fn(),
          },
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

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
