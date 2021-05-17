import { Injectable } from '@nestjs/common';
import { users } from './interfaces/users';
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema } from 'mongoose';
import { createUserDto } from './dto/dto';

@Injectable()
export class UsersService {

    constructor(@InjectModel('users') private userModel: Model<users>){}


    async getUsers(){
        return await this.userModel.find();
    }

    async getUser(id: string){
        return await this.userModel.findById(id);
    }

    async createUser(user: createUserDto){
        const userNew = new this.userModel(user);
        return await userNew.save();
    }

    async updateUser(id: string, dataUser: users){
        return await this.userModel.findByIdAndUpdate(id, dataUser) 
    }
    async deleteUser(id: string){
        return await this.userModel.findOneAndDelete({_id: id});
    }
}
