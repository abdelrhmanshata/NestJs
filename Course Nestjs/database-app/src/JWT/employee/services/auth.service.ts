import { Model } from 'mongoose';
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Employee } from '../interfaces/employee.interface';
import { signInDto, signUpDto } from '../dto/Auth/auth-employee.dto';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('Employee_MODEL')
    private employeeModel: Model<Employee>,
    private jwtService: JwtService,
  ) {}

  async signIn(body: signInDto) {
    const { email, password } = body;
    const employee = await this.employeeModel.findOne({ email });
    if (!employee) throw new NotFoundException();
    const userPassword = employee.password;
    if (!(await bcrypt.compare(password, userPassword)))
      throw new NotFoundException();

    // create token by payload
    const payload = { email: employee.email, role: employee.role };
    const access_token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });

    return { data: employee, access_token };
  }
  async signUp(body: signUpDto) {
    try {
      const saltOrRounds = 10;
      const password = await bcrypt.hash(body.password, saltOrRounds);
      body.password = password;
      const emplyee: any = { ...body, role: 'employee' };
      const newEmployee = await this.employeeModel.create(emplyee);
      // create token by payload
      return newEmployee;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists.');
      }
      throw error; // Re-throw any other errors
    }
  }
}
