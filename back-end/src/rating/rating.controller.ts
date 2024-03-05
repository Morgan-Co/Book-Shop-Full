import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get()
  async getAll() {
    return this.ratingService.getAll();
  }

  @Get(':id')
  async getRating(@Param('id') id: string) {
    return this.ratingService.getRating(id);
  }

  @Post()
  async createRating(@Body() data) {
    return this.ratingService.createRating(data);
  }
}
