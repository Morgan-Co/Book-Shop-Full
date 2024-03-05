import { Module } from '@nestjs/common';
// import { AuthModule } from './auth/auth.module';
// import { BookModule } from './book/book.module';
// import { CurrencyModule } from './currency/currency.module';
import { LanguageModule } from './language/language.module';
import { AuthorModule } from './author/author.module';
import { ConfigModule } from '@nestjs/config';
// import { UserModule } from './user/user.module';
// import { CategoryModule } from './category/category.module';
import { RatingModule } from './rating/rating.module';
// import { UserBooksModule } from './user-books/user-books.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // AuthModule,
    // BookModule,
    // CurrencyModule,
    LanguageModule,
    AuthorModule,
    // UserModule,
    // CategoryModule,
    RatingModule,
    // UserBooksModule,
  ],
})
export class AppModule {}
