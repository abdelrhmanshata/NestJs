import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class signInDto {
  @IsString({ message: 'email must be string' })
  @IsEmail({}, { message: 'this email not valid !!!' })
  email: string;

  @IsString({ message: 'password must be string' })
  @MinLength(8, { message: 'password must be at least 5 characters' })
  @MaxLength(20, { message: 'password must be less than 20 characters' })
  password: string;
}

export class signUpDto {
  @IsString({ message: 'email must be string' })
  @IsEmail({}, { message: 'this email not valid !!!' })
  @IsNotEmpty()
  email: string;

  @IsString({ message: 'password must be string' })
  @MinLength(8, { message: 'password must be at least 5 characters' })
  @MaxLength(20, { message: 'password must be less than 20 characters' })
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nationalId: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  programmingLanguages?: string[];

  @IsString()
  @IsEnum(['Beginner', 'Intermediate', 'Expert'])
  @IsOptional()
  experienceLevel?: 'Beginner' | 'Intermediate' | 'Expert';
}
