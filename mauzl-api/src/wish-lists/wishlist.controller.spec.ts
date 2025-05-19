import { Test, TestingModule } from '@nestjs/testing';
import { WishListsController } from './wishlist.controller';
import { WishListsService } from './wishlist.service';

describe('ProductsController', () => {
  let controller: WishListsController;
  let service: WishListsService;

  const mockWishlistService = {
    // Define any methods you want to mock here
    createWishlistProduct: jest.fn(),
    addMultipleProducts: jest.fn(),
    removeFromWishlist: jest.fn(),
    // Add other methods as needed
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishListsController],
      providers: [
        {
          provide: WishListsService,
          useValue: mockWishlistService, // Use the mocked service
        },
      ],
    }).compile();

    controller = module.get<WishListsController>(WishListsController);
    service = module.get<WishListsService>(WishListsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(service).toBeDefined();
  });
});
