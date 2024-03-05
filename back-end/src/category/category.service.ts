import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.category.findMany();
  }

  getBookCategory(id: string) {
    return this.prisma.category.findMany({
      where: { books: { some: { bookId: id } } },
    });
  }

  createCategory(data) {
    return this.prisma.category.create({ data });
  }
}
