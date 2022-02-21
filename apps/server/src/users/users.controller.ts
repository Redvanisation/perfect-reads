import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  @Get()
  async findAll(): Promise<any[]> {
    return [];
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // We will have a function from the service that will create the user
    return 'This action adds a new user';
  }
}
