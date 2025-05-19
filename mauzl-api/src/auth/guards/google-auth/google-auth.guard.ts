import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  getAuthenticateOptions(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const state = request.query.state;
    return {
      scope: ['email', 'profile'],
      state, // 👈 will be passed to Google
      prompt: 'select_account',
    };
  }
}
