import {
  IsString,
  IsEmail,
  IsOptional,
  IsArray,
  IsEnum,
} from 'class-validator';

export enum ExperienceLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  EXPERT = 'Expert',
}

export enum Roles {
  admin = 'admin',
  manger = 'manger',
  employee = 'employee',
}

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  nationalId: string;

  @IsString()
  city: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsArray()
  @IsString({ each: true })
  programmingLanguages: string[];

  @IsEnum(ExperienceLevel)
  experienceLevel: ExperienceLevel;

  @IsString()
  @IsEnum(Roles, {
    message: 'role must be admin or manger or employee',
  })
  @IsOptional()
  role?: Roles;
}
