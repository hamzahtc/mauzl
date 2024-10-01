import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';
import { BufferedFile } from '~minio-client/file.model';

@Controller('images')
export class ImageController {
  constructor(private imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() image: BufferedFile) {
    return await this.imageService.uploadImage(image);
  }

  @Get(':image')
  async getImageLink(@Param('image') fileName: string) {
    return this.imageService.getImageLink(fileName);
  }
}
