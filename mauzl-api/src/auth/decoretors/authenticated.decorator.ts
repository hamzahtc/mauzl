import { SetMetadata } from '@nestjs/common';

export const IS_AUTHENTICATED_KEY = 'IS_AUTHENTICATED';
export const Authenticated = () => SetMetadata(IS_AUTHENTICATED_KEY, true);
