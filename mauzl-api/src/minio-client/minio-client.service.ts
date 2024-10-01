import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { MinioService } from 'nestjs-minio-client';
import { AppMimeType, BufferedFile } from './file.model';
import * as crypto from 'crypto';
import { supportedMimeTypes } from './file.constant';

@Injectable()
export class MinioClientService {
  constructor(private readonly minio: MinioService) {
    this.logger = new Logger('MinioService');
  }

  private readonly logger: Logger;
  private readonly bucketName = process.env.MINIO_BUCKET_NAME;

  public get client() {
    return this.minio.client;
  }

  public async upload(file: BufferedFile) {
    if (!supportedMimeTypes.includes(file.mimetype as AppMimeType)) {
      throw new HttpException(
        'File type not supported',
        HttpStatus.BAD_REQUEST,
      );
    }

    const timestamp = Date.now().toString();
    const hashedFileName = crypto
      .createHash('md5')
      .update(timestamp)
      .digest('hex');
    const extension = file.originalname.substring(
      file.originalname.lastIndexOf('.'),
      file.originalname.length,
    );
    const metaData = {
      'Content-Type': file.mimetype,
    };

    // We need to append the extension at the end otherwise Minio will save it as a generic file
    const fileName = hashedFileName + extension;

    try {
      // Use await and remove the callback
      await this.client.putObject(
        this.bucketName,
        fileName,
        file.buffer,
        file.buffer.length,
        metaData,
      );

      return fileName;
    } catch (err) {
      this.logger.error('Error uploading file', err);
      throw new HttpException('Error uploading file', HttpStatus.BAD_REQUEST);
    }
  }

  async delete(objectName: string) {
    try {
      await this.client.removeObject(this.bucketName, objectName);
      this.logger.log(
        `Object ${objectName} deleted successfully from bucket ${this.bucketName}`,
      );
    } catch (err) {
      this.logger.error('Error occurred while deleting object', err);
      throw new HttpException(
        'An error occurred when deleting!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async generatePresignedUrl(objectName: string) {
    try {
      return this.client.presignedGetObject(this.bucketName, objectName);
    } catch (err) {
      this.logger.error('Error occurred while generating url', err);
      throw new HttpException(
        'An error occurred when generating url!',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
