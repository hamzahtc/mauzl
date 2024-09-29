import { Test, TestingModule } from '@nestjs/testing';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

describe('ImageUploadController', () => {
  let controller: ImageController;
  let imageService: ImageService;

  beforeEach(async () => {
    const mockImageService = {
      uploadImage: jest.fn(), // Mocking the uploadImage method
      getDownloadLink: jest.fn(), // Mocking the getDownloadLink method
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageController],
      providers: [
        {
          provide: ImageService,
          useValue: mockImageService, // Injecting the mocked service
        },
      ],
    }).compile();

    controller = module.get<ImageController>(ImageController);
    imageService = module.get<ImageService>(ImageService); // Get the mocked service instance
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(imageService).toBeDefined();
  });
});
