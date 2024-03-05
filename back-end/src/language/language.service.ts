import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class LanguageService {
  constructor(private prisma: PrismaService) {}

  async getLanguage() {
    return this.prisma.language.findMany();
  }

  async createLanguage(data) {
    return this.prisma.language.create({ data });
  }
}
