import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.rating.findMany();
  }

  async getRating(id: string) {
    return this.prisma.rating.findMany({ where: { bookId: id } });
  }

  async createRating(data) {
    return this.prisma.rating.create({
      data,
    });
  }
}
