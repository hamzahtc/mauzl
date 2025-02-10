import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file if not using ConfigModule directly

export default registerAs('googleOAuth', () => ({
  clinetID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
}));
