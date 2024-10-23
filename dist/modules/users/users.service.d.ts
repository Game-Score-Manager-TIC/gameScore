import { UserDto } from '../commons/dto/user.input';
export interface User {
    id: string;
    username: string;
    name: string;
    email: number;
    role: 'admin' | 'user';
    status: 'enabled' | 'blocked' | 'deleted';
    avatar?: string;
}
export declare class UsersService {
    private users;
    createUser(createUserDto: UserDto): User;
    findAll(): User[];
    findById(id: string): User;
    changeUserRole(id: string, newRole: 'admin' | 'user', requestingUser: User): User;
}
