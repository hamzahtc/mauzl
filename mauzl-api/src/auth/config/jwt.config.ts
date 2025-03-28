import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file if not using ConfigModule directly

export default registerAs(
  'jwt',
  (): JwtModuleOptions => ({
    secret: process.env.REFRESH_JWT_SECRET,
    signOptions: { expiresIn: '1h' },
  }),
);
