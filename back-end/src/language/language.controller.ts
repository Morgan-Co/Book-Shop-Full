import { Body, Controller, Get, Post } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  async getLanguage() {
    return this.languageService.getLanguage();
  }

  @Post()
  async createLanguage(@Body() data) {
    return this.languageService.createLanguage(data);
  }
}
