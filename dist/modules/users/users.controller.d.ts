import { User, UsersService } from './users.service';
import { UserDto } from '../commons/dto/user.input';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(user: UserDto): User;
    findAll(requestingUser: User): User[];
    changeUserRole(user_id: string, role: 'admin' | 'user', requestingUser: User): User;
}
