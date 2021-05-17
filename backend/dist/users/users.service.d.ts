import { users } from './interfaces/users';
import { Model } from 'mongoose';
import { createUserDto } from './dto/dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<users>);
    getUsers(): Promise<users[]>;
    getUser(id: string): Promise<users>;
    createUser(user: createUserDto): Promise<users>;
    updateUser(id: string, dataUser: users): Promise<users>;
    deleteUser(id: string): Promise<users>;
}
