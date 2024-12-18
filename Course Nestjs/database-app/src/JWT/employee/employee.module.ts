import { Module } from '@nestjs/common';
import { EmployeeService } from './services/Admin/employee.service';
import { EmployeeController } from './controllers/Admin/employee.controller';
import { DatabaseModule } from 'src/database/database.module';
import { employeesProviders } from './providers/employee.provider';
import { JwtModule } from '@nestjs/jwt';
import {
  AuthSignInController,
  AuthSignUpController,
} from './controllers/Auth/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '300s' },
    }),
  ],
  controllers: [EmployeeController, AuthSignInController, AuthSignUpController],
  providers: [...employeesProviders, EmployeeService, AuthService],
})
export class EmployeeModule {}
