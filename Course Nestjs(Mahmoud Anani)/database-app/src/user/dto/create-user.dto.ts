import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
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
