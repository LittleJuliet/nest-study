import { Controller, Get, Ip, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get('cats')
  findAll(@Req() req: Request) {
    console.log(req);
    return 'This action returns all cats.';
  }

  @Get('header')
  getHeader(@Query('name') name: string) {
    return `The query name is ${name}`;
  }

  @Get('ip')
  getIp(@Ip() ip: string) {
    return `Your IP is ${ip}`;
  }
}
