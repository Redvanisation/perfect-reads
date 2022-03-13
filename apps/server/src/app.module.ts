import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';

@Module({
  // imports: [MongooseModule.forRoot(`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.91iqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`), UsersModule],
  imports: [
    MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.91iqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`), 
    UsersModule, 
    AuthModule, BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
