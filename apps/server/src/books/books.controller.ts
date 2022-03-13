import { BooksService } from './books.service';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getAll(@Query() query) {
    return await this.booksService.getAll(query);
  }
}
