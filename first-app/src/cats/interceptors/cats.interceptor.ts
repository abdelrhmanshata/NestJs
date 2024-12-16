import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CatsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Interceptors Before...');
    // console.log(context);
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`Interceptors After... ${Date.now() - now}ms`)),
      );
  }
}
