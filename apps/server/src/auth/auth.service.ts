import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

type AuthUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const mapAuthenticatedUser = ({ _id, firstName, lastName, email, password }: AuthUser) => ({ id: _id, firstName, lastName, email });
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email.toLowerCase());
    if (!user) return;
    const match = await bcrypt.compare(password, user.password);

    
    if (user && match) {
      const authUser = mapAuthenticatedUser(user as AuthUser);
      return authUser;
    }
    return null;
  }
}
