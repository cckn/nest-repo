import { Controller, Get, Param, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name/:id')
  getHello(@Param('name') name: string, @Param('id') id: string) {
    console.log(`name: ${name} typeof: ${typeof name}`);
    console.log(`id: ${id} type: ${typeof id}`);

    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return 'Say Hello';
  }
}
