import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CurrencyService {
  constructor(private prisma: PrismaService) {}

  async getAllCurrency() {
    return this.prisma.currency.findMany();
  }

  async createCurrency(data) {
    return this.prisma.currency.create({ data });
  }

  async deleteCurrency(id: string) {
    return this.prisma.currency.delete({ where: { id } });
  }

  async getCurrency(id: string) {
    // return id;
    return this.prisma.currency.findUnique({ where: { id } });
  }
}
