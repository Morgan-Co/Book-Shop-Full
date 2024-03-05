import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Get(':id')
  getBookCategory(@Param('id') id: string) {
    return this.categoryService.getBookCategory(id);
  }

  @Post()
  createBook(@Body() data) {
    return this.categoryService.createCategory(data);
  }
}
