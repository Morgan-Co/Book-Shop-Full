import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  async getAllCurrency() {
    return this.currencyService.getAllCurrency();
  }

  @Post()
  async createCurrency(@Body() data) {
    return this.currencyService.createCurrency(data);
  }

  @Delete(':id')
  async deleteCurrency(@Param('id') id: string) {
    return this.currencyService.deleteCurrency(id);
  }

  @Get(':id')
  async getCurrency(@Param('id') id: string) {
    // return id;
    return this.currencyService.getCurrency(id);
  }
}
