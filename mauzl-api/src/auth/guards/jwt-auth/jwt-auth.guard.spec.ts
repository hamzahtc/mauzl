import { JwtAuthGuard } from './jwt-auth.guard';
import { Reflector } from '@nestjs/core';

describe('JwtAuthGuard', () => {
  let reflector: Reflector;

  beforeEach(() => {
    reflector = new Reflector();
  });

  it('should be defined', () => {
    expect(new JwtAuthGuard(reflector)).toBeDefined();
  });
});
