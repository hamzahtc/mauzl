import { registerAs } from '@nestjs/config';
import { JwtSignOptions } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file if not using ConfigModule directly

export default registerAs(
  'refresh-jwt',
  (): JwtSignOptions => ({
    secret: process.env.REFRESH_JWT_SECRET,
    expiresIn: process.env.REFRESH_JWT_EXPIRE_IN || '7d',
  }),
);
