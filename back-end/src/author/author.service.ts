import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuthorService {
  constructor(private prisma: PrismaService) {}

  async getAuthors() {
    return this.prisma.author.findMany();
  }

  async getAuthorById(id: string) {
    return this.prisma.author.findMany({
      where: { books: { some: { bookId: id } } },
    });
  }

  async createAuthor(data) {
    return this.prisma.author.create({ data });
  }
}
