import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString({ message: 'Must be String' })
  name: string;

  @IsNumber()
  @Min(18)
  @Max(30)
  age: number;

  @IsEmail()
  email: string;
  @IsBoolean()
  isActive: boolean;
}
