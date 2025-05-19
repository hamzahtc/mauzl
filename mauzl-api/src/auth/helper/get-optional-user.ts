import { Injectable, Scope, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth.service';
import { AuthJwtPayload } from '../types/auth-jwtPayload';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST }) // Make it request-scoped
export class OptionalAuthExtractor {
  constructor(
    @Inject(REQUEST) private readonly request: Request, // Inject current request
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  async getCurrentUser() {
    const token = this.request.cookies?.accessToken;
    if (!token) return null;

    try {
      const payload = this.jwtService.verify<AuthJwtPayload>(token);
      return await this.authService.validateJwtUser(payload.sub);
    } catch (e) {
      return null;
    }
  }
}
