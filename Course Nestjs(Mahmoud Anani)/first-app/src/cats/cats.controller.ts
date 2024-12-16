import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ParseUUIDPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsPipe } from './Pipes/cats.pipe';
// import { CatsGuard } from './guards/cats.guard';
import { Roles } from './guards/roles.decorator';
import { RolesGuard } from './guards/roles.guard';

// use guards to all endpoint
// @UseGuards(CatsGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // use guards to specific endpoint
  @Get()
  // @UseGuards(CatsGuard)
  findAll() {
    return this.catsService.findAll();
  }

  @Post()
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  // How use pipe in nestjs
  //use ParseIntPipe to check if the id is int number or not
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(+id);
  }

  //use ParseUUIDPipe to check if the id is UUID  or not
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new CatsPipe()) updateCatDto: UpdateCatDto,
  ) {
    return this.catsService.update(+id, updateCatDto);
  }

  // Use Custom Decorators and Guard into Delete Method
  @Roles(['admin'])
  @UseGuards(RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(id);
  }
}
