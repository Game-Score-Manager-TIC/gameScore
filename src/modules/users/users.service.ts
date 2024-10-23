import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserDto } from '../commons/dto/user.input';
import { v4 as uuidv4 } from 'uuid';

export interface User {
  id: string;
  username: string;
  name: string;
  email: number;
  role: 'admin' | 'user';
  status: 'enabled' | 'blocked' | 'deleted';
  avatar?: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(createUserDto: UserDto): User {
    const newUser = { id: uuidv4(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  changeUserRole(
    id: string,
    newRole: 'admin' | 'user',
    requestingUser: User,
  ): User {
    if (requestingUser.role !== 'admin') {
      throw new ForbiddenException(
        'Solo los administradores pueden cambiar roles',
      );
    }

    const user = this.findById(id);
    if (user) {
      user.role = newRole;
    }
    return user;
  }
}
