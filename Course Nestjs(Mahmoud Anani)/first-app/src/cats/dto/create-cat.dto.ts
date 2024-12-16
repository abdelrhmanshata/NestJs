import { IsString, IsInt, IsOptional } from 'class-validator';
export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  @IsOptional()
  age: number;
}
