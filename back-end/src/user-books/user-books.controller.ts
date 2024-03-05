import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { UserBooksService } from './user-books.service';
import { Auth } from '../auth/decorators/auth.decorator';
import { CurrentUser } from '../auth/decorators/user.decorator';

@Controller('user-books')
export class UserBooksController {
  constructor(private readonly userBooksService: UserBooksService) {}

  @HttpCode(200)
  @Get()
  @Auth()
  async getUserBooks(@CurrentUser('id') id: string) {
    return this.userBooksService.getUserBooks(id);
  }

  @HttpCode(200)
  @Post()
  @Auth()
  async addBookToCart(@CurrentUser('id') userId: string, @Body() data) {
    // return { bookId };
    const newData = {
      userId,
      bookId: data.bookId,
    };
    return this.userBooksService.addBookToCart(newData);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async removeBookFromCart(
    @CurrentUser('id') userId: string,
    @Param('id') bookId: string,
  ) {
    // return { bookId };
    const newData = {
      userId,
      bookId: bookId,
    };
    return this.userBooksService.removeBookFromCart(newData);
  }
}
