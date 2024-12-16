import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CatsMiddleware } from './cats/middleware/cats.middleware';
import { CatsGuard } from './cats/guards/cats.guard';
import { CatsInterceptor } from './cats/interceptors/cats.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use the Middleware as global in app
  app.use(new CatsMiddleware().use);

  // use Guards as global in app
  app.useGlobalGuards(new CatsGuard());

  // use the Pipe as global in app
  app.useGlobalPipes(new ValidationPipe());

  // use the Interceptor as global in app
  app.useGlobalInterceptors(new CatsInterceptor());

  await app.listen(process.env.PORT ?? 3000);
  console.log('Server listening on port 3000');
}
bootstrap();
