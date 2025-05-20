import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import { ConfigService } from '@nestjs/config';

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              const mockConfig = {
                SMTP_HOST: 'localhost',
                SMTP_PORT: 1025,
                SMTP_SECURE: false,
                SMTP_USER: '',
                SMTP_PASS: '',
                EMAIL_FROM: '"Mauzl" <mauzlshop@gmail.com>',
              };
              return mockConfig[key];
            }),
          },
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
