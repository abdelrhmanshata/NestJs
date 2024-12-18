import { PartialType } from '@nestjs/mapped-types';
import {
  CreateEmployeeDto,
  ExperienceLevel,
  Roles,
} from './create-employee.dto';
import {
  IsOptional,
  IsString,
  IsEmail,
  IsArray,
  IsEnum,
} from 'class-validator';

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  nationalId?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  programmingLanguages?: string[];

  @IsOptional()
  @IsEnum(ExperienceLevel)
  experienceLevel?: ExperienceLevel;

  @IsString()
  @IsEnum(Roles)
  @IsOptional()
  role?: Roles;
}
