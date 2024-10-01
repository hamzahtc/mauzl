import { Injectable } from '@nestjs/common';
import { BufferedFile } from '~minio-client/file.model';
import { MinioClientService } from '~minio-client/minio-client.service';

@Injectable()
export class ImageService {
  constructor(private minioClientService: MinioClientService) {}

  async uploadImage(image: BufferedFile) {
    return await this.minioClientService.upload(image);
  }

  async getImageLink(image: string) {
    return this.minioClientService.generatePresignedUrl(image);
  }
}
