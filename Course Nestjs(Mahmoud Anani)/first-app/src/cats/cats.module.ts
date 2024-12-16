import { Module } from '@nestjs/common';
// import { ValidationPipe } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

// How can use pipe into specific module
// import { APP_PIPE } from '@nestjs/core';

// use the guards into specific module
// import { APP_GUARD } from '@nestjs/core';
// import { CatsGuard } from './guards/cats.guard';

// use the interceptor into specific module
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { CatsInterceptor } from './interceptors/cats.interceptor';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,

    //add this object to use pipe into module
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },

    //add this object to use guard into module
    // {
    //   provide: APP_GUARD,
    //   useClass: CatsGuard,
    // },

    //add this object to use interceptor into module
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CatsInterceptor,
    // },
  ],
})
export class CatsModule {}
