import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import { IsInt, IsString } from 'class-validator';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  @IsString()
  name: string;

  @IsInt()
  age: number;
}
