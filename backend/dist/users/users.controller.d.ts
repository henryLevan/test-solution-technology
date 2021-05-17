import { createUserDto } from './dto/dto';
import { UsersService } from './users.service';
import { users } from './interfaces/users';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUsers(): Promise<users[]>;
    getUser(userId: string): Promise<users>;
    createUser(user: createUserDto): Promise<users>;
    updateUser(userId: string, dataUser: users): Promise<users>;
    deleteUsers(userId: string): Promise<any>;
}
