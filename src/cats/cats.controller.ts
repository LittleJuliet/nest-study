import {
  Body,
  Controller,
  Get,
  HttpCode,
  Ip,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller({ path: 'cats' })
export class CatsController {
  @Get('cats')
  findAll() {
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

  @Post('error')
  @HttpCode(200)
  createError(@Req() req: Request) {
    const { isError = 0 } = req.body;
    if (isError) {
      throw new Error('This is a error');
    }
    return 'This action return a error.';
  }

  @Get('get/:id')
  getCatById(@Param() params) {
    const { id } = params;
    return `You get a cat which id is ${id}`;
  }

  @Post('create')
  @HttpCode(200)
  createCat(@Body() cat: CreateCatDto) {
    return { ...cat };
  }
}
