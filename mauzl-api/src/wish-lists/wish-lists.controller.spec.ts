import { Test, TestingModule } from '@nestjs/testing';
import { WishListsController } from './wish-lists.controller';
import { WishListsService } from './wish-lists.service';

describe('WishListsController', () => {
  let controller: WishListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishListsController],
      providers: [WishListsService],
    }).compile();

    controller = module.get<WishListsController>(WishListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
