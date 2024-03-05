import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserBooksService {
  constructor(private prisma: PrismaService) {}

  async getUserBooks(id: string) {
    const userBooks = await this.prisma.userBooks.findMany({
      where: { userId: id },
      select: { book: true },
    });

    const books = userBooks.map((userBook) => userBook.book);
    return books;
  }

  async addBookToCart(data) {
    return this.prisma.userBooks.create({ data });
  }

  async removeBookFromCart(data) {
    return this.prisma.userBooks.delete({
      where: { bookId_userId: { bookId: data.bookId, userId: data.userId } },
    });
  }
}
