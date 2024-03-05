import { Module } from '@nestjs/common';
import { UserBooksService } from './user-books.service';
import { UserBooksController } from './user-books.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [UserBooksController],
  providers: [UserBooksService, PrismaService],
})
export class UserBooksModule {}
