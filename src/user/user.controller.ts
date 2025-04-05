import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Controller("/users")
export class UserController{

    constructor(private userRepository: UserRepository){

    }

    @Post()
    async createUser(@Body() usersData: CreateUserDTO){
        this.userRepository.save(usersData)
        return usersData
    }

    @Get()
    async showUsers(){
        return this.userRepository.show()
    }
}