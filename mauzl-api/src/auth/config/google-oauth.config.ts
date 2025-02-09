import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config(); // Load .env file if not using ConfigModule directly

export default registerAs('googleOAuth', () => ({
  clinetID:
    process.env.GOOGLE_CLIENT_ID ||
    'ss-6pb8hajo1fghgco610uqbjj4hn1pps9h.apps.googleusercontent.com',
  clientSecret: process.env.GOOGLE_SECRET || 'ss-zmQp2K9Puz3XkrXAQX2uR9h4UjSL',
  callbackURL:
    process.env.GOOGLE_CALLBACK_URL ||
    'http://localhost:4000/api/auth/google/callback',
}));
