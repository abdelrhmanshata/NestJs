import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class CatsGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('Guards Request...');
    // console.log('context : ', context);
    // Code logic
    return true;
  }
}
