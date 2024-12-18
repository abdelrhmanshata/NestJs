import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { EmployeesGuard } from './JWT/employee/guards/employees.guard';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log('Starting Nest Js Server Port 3000');

  // use this guards as a global guard 
  app.useGlobalGuards(new EmployeesGuard(new Reflector(), new JwtService()));

}
bootstrap();
