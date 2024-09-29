import { Test, TestingModule } from '@nestjs/testing';
import { ImageService } from './image.service';
import { MinioClientService } from '~minio-client/minio-client.service';

describe('ImageUploadService', () => {
  let service: ImageService;

  const mockMinioClientService = {
    upload: jest.fn(),
    generatePresignedUrl: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImageService,
        {
          provide: MinioClientService,
          useValue: mockMinioClientService,
        },
      ],
    }).compile();

    service = module.get<ImageService>(ImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
