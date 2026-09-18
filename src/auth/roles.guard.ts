import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Optional } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(@Optional() private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext) {
    const roles = this.reflector?.get<string[]>('roles', context.getHandler());
    if (!roles) return true;
    const user = context.switchToHttp().getRequest().user;
    if (!roles.includes(user?.role)) throw new ForbiddenException('Insufficient permissions');
    return true;
  }
}