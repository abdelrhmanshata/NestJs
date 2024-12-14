import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/hello')
  sayHello(
    @Body('name') userName: string,
    @Req() req: any,
    @Res() res: any,
  ): string {
    res.send(req.body);
    // res.send(this.appService.sayHello(userName));
    return this.appService.sayHello(userName);
  }

  // Body Parameters
  @Post('/body/hello')
  sayHello_Body(@Body() body: any): string {
    return body;
  }

  // Query Parameters
  @Post('/query/hello')
  sayHello_Query(@Query() query: any): string {
    return query;
  }

  // Path Parameters
  @Post('/param/hello/:name')
  sayHello_Path(@Param() params: any): string {
    return params;
  }
}
