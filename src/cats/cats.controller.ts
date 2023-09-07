import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post('create')
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get('findAll')
  findAll() {
    return this.catsService.findAll();
  }
}
