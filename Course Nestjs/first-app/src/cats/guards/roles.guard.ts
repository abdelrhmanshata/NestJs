import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // console.log('context : ', context);
    const roles: string[] = this.reflector.get(Roles, context.getHandler()); // get array of roles from decorator
    // console.log('Roles : ', roles);
    // Code logic
    if (!roles) return true;
    if (!roles.includes('admin')) {
      throw new UnauthorizedException('This User Not Allowed to Methods');
      return false;
    }
    return true;
  }
}
