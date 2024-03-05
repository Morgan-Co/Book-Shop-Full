import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  async getAuthors() {
    return this.authorService.getAuthors();
  }

  @Get(':id')
  async getAuthorById(@Param('id') id: string) {
    return this.authorService.getAuthorById(id);
  }

  @Post()
  async createAuthors(@Body() data) {
    return this.authorService.createAuthor(data);
  }
}
