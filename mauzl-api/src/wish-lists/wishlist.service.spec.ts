import { Test, TestingModule } from '@nestjs/testing';
import { WishListsService } from './wishlist.service';
import { ImageService } from '~images/image.service';
import { MinioClientService } from '~minio-client/minio-client.service';
import { Category } from '~categories/entities/category.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '~products/entities/product.entity';
import { ProductImage } from '~product-images/entities/product-image.entity';
import { Wishlist } from './entities/wishlist.entity';
import { OptionalAuthExtractor } from '~auth/helper/get-optional-user';

describe('WishListsService', () => {
  let service: WishListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WishListsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Wishlist),
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
        {
          provide: OptionalAuthExtractor,
          useValue: {
            getCurrentUser: jest.fn().mockReturnValue(null),
          },
        },
        {
          provide: ImageService,
          useValue: {
            getImageLink: jest.fn().mockResolvedValue('mocked_image_link'),
          },
        },
      ],
    }).compile();

    service = module.get<WishListsService>(WishListsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
