import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  firstName: string;
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}