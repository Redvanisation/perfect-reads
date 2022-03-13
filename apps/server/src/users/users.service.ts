import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserSchema } from '../schemas/user.schema';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';
import { hashUserPassword } from 'utils/userUtils';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    const hashedPassword = await hashUserPassword(createUserDto.password);
    createdUser.password = hashedPassword;

    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // async findOne(id: string): Promise<User> {
  //   return this.userModel.findById(id).exec();
  // }

  async findOneByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user) {
      return user;
    }
    throw new HttpException('User not found!', 400);
  }

  async update(id: string, body: CreateUserDto): Promise<User> {
    const hashedPassword = await hashUserPassword(body.password);
    console.log(hashedPassword);
    body.password = hashedPassword;
    return this.userModel.findOneAndUpdate({ _id: id }, body).exec();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id).exec();
  }
}
