import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesGuard } from '../../guards/employees.guard';
import { AuthService } from '../../services/auth.service';
import { signInDto, signUpDto } from '../../dto/Auth/auth-employee.dto';

@Controller('sign-in')
@UseGuards(EmployeesGuard)
export class AuthSignInController {
  constructor(private readonly authService: AuthService) {}
  // ================================================================= //
  // @desc any employee can sing-in
  // @route POST /sign-in
  // @access Public
  @Post()
  signIn(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    body: signInDto,
  ) {
    return this.authService.signIn(body);
  }
}

@Controller('sign-up')
@UseGuards(EmployeesGuard)
export class AuthSignUpController {
  constructor(private readonly authService: AuthService) {}
  // ================================================================= //
  // @desc any employee can sing-up
  // @route POST /sign-up
  // @access Public
  @Post()
  signUp(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    body: signUpDto,
  ) {
    console.log('====================================');
    console.log(body);
    console.log('====================================');
    return this.authService.signUp(body);
  }
}
