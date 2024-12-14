import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Nest JS!';
  }

  sayHello(username: string): string {
    return `Hello World! Nest JS!${username}`;
  }
}
