import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { BookDto } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.book.findMany();
  }

  async createBook(data: BookDto) {
    const { authorId, categoryId, ...rest } = data;

    return this.prisma.book.create({
      data: {
        ...rest,
        authors: {
          create: { authorId },
        },
        category: {
          create: { categoryId },
        },
      },
    });
  }

  async deleteBook(id: string, ids: { authorId: string; categoryId: string }) {
    await this.prisma.bookAuthors.delete({
      where: { authorId_bookId: { bookId: id, authorId: ids.authorId } },
    });
    await this.prisma.bookCategories.delete({
      where: { categoryId_bookId: { bookId: id, categoryId: ids.categoryId } },
    });
    await this.prisma.book.delete({
      where: { id },
      select: { category: true },
    });
    // return this.prisma.bookAuthors.findMany();
  }

  async getBook(id: string) {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async updateBook(id: string, data: BookDto) {
    const { authorId, categoryId, ...rest } = data;
    return this.prisma.book.update({
      where: { id },
      data: {
        ...rest,
        category: {
          update: {
            where: { categoryId_bookId: { categoryId, bookId: id } },
            data: { categoryId },
          },
        },
        authors: {
          update: {
            where: { authorId_bookId: { authorId, bookId: id } },
            data: { authorId },
          },
        },
      },
    });
  }

  async getWithCategory(category: string) {
    return this.prisma.book.findMany({
      where: { category: { some: { category: { name: category } } } },
    });
  }
}
