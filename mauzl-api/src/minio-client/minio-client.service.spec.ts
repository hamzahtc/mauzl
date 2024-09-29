import { Test, TestingModule } from '@nestjs/testing';
import { MinioClientService } from './minio-client.service';
import { ConfigModule } from '@nestjs/config';
import { MinioModule } from 'nestjs-minio-client';

describe('MinioClientService', () => {
  let service: MinioClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true, // If your ConfigModule is global in your application
        }),
        MinioModule.registerAsync({
          imports: [ConfigModule],
          useFactory: () => ({
            endPoint: 'localhost',
            port: 9000,
            useSSL: false,
            accessKey: 'testAccessKey',
            secretKey: 'testSecretKey',
          }),
        }),
      ],
      providers: [MinioClientService],
    }).compile();

    service = module.get<MinioClientService>(MinioClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
