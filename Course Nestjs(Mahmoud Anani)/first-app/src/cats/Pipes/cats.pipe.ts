import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CatsPipe implements PipeTransform {
  transform(value: any) {
    if (!value.name) {
      throw new BadRequestException('Cat Name is required');
    }
    console.log('Value:', value);
    return value;
  }
}
