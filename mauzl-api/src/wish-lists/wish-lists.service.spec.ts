import { Test, TestingModule } from '@nestjs/testing';
import { WishListsService } from './wish-lists.service';

describe('WishListsService', () => {
  let service: WishListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WishListsService],
    }).compile();

    service = module.get<WishListsService>(WishListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
