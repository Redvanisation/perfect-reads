import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster0.91iqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
