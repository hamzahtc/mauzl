import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { IS_AUTHENTICATED_KEY } from '~auth/decoretors/authenticated.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }
  canActivate(context: ExecutionContext) {
    const isAuthenticated = this.reflector.getAllAndOverride<boolean>(
      IS_AUTHENTICATED_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Only run the guard if @Authenticated is present
    if (!isAuthenticated) {
      return true;
    }
    return super.canActivate(context);
  }
}
