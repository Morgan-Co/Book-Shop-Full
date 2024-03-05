import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { BookService } from './book.service';
// import { BookDto } from './dto/book.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { BookDto } from './dto/book.dto';
// import { BookDto } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAll() {
    return this.bookService.getAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createBook(@Body() data: BookDto) {
    return this.bookService.createBook(data);
  }

  @Delete(':id')
  deleteBook(
    @Param('id') id: string,
    @Body() data: { authorId: string; categoryId: string },
  ) {
    console.log(data);

    return this.bookService.deleteBook(id, data);
  }

  @Get(':id')
  async getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() data) {
    return this.bookService.updateBook(id, data);
  }

  @Get('category/:category')
  getWithCategory(@Param('category') category: string) {
    return this.bookService.getWithCategory(category);
  }
}
