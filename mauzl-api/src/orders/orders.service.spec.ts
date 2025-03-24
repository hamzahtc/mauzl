import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrderItem } from '~order-items/entities/order-item.entity';
import { Product } from '~products/entities/product.entity';
import { Address } from '~addresses/entities/address.entity';
import { Order } from './entities/order.entity';
import { Client } from '~clients/entities/client.entity';
import { Repository } from 'typeorm';
import { ImageService } from '~images/image.service';
import { EmailService } from '~email/email.service';
import { MinioClientService } from '~minio-client/minio-client.service';
import { MinioService } from 'nestjs-minio-client';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: ImageService,
          useValue: {},
        },
        {
          provide: EmailService,
          useValue: {},
        },
        {
          provide: MinioClientService,
          useValue: {},
        },
        {
          provide: MinioService,
          useValue: {},
        },
        {
          provide: getRepositoryToken(Order),
          useValue: Repository,
        },
        {
          provide: getRepositoryToken(Client),
          useValue: Repository,
        },
        {
          provide: getRepositoryToken(Address),
          useValue: Repository,
        },
        {
          provide: getRepositoryToken(OrderItem),
          useValue: Repository,
        },
        {
          provide: getRepositoryToken(Product),
          useValue: Repository,
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
