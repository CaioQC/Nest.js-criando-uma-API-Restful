import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller("/users")
export class UserController{

    constructor(private userRepository: UserRepository){

    }

    @Post()
    async createUser(@Body() usersData){
        this.userRepository.save(usersData)
        return usersData
    }

    @Get()
    async showUsers(){
        return this.userRepository.show()
    }
}