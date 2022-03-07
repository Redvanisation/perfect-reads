import { Controller, Delete, Param, Put } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UsersService } from './users.service';
import { User } from '../schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    // We will have a function from the service that will create the user
    return this.usersService.create(createUserDto);
    // return 'This action adds a new user';
  }

  // @Get(':id')
  // async findOne(@Param() params): Promise<User> {
  //   return this.usersService.findOne(params.id);
  // }

  @Get(':email')
  async findOneByEmail(@Param() params): Promise<User> {
    return this.usersService.findOneByEmail(params.email);
  }

  @Put(':id')
  async update(@Param() params, @Body() body: CreateUserDto): Promise<User> {
    return this.usersService.update(params.id, body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<User> {
    return this.usersService.delete(params.id);
  }
}
