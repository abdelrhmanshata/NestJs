import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'Product Name must be String' })
  name: string;

  @IsString({ message: 'Category must be String' })
  category: string;

  @IsNumber()
  @Min(0)
  @Max(100)
  count: number;
}
