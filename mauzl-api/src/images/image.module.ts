import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { MinioClientModule } from '~minio-client/minio-client.module';

@Module({
  imports: [MinioClientModule],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
