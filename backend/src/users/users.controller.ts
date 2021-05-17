import { Controller, Get, Put, Post, Delete, Body, HttpCode, Param } from '@nestjs/common';
import { createUserDto } from './dto/dto';
import { UsersService } from './users.service';
import { users } from './interfaces/users';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

@Get()
getUsers():Promise<users[]>{
    return this.userService.getUsers();
}

@Get(':userId')
getUser(@Param('userId') userId: string){
    return this.userService.getUser(userId);
}

@Post()
createUser(@Body() user: createUserDto): Promise<users>{
    console.log(user)
    return this.userService.createUser(user);
}

@Put(':userId')
updateUser(@Param('userId') userId: string, @Body() dataUser: users): Promise<users>{
    return this.userService.updateUser(userId, dataUser)
}

@Delete(':userId')
deleteUsers(@Param('userId') userId: string):Promise<any>{
    return this.userService.deleteUser(userId);
}

}
