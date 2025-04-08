import { Body, Controller, Post, Get } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from "uuid";
import { ListUsersDTO } from "./dto/ListUsers.dto";

@Controller("/users")
export class UserController{

    constructor(private userRepository: UserRepository){

    }

    @Post()
    async createUser(@Body() usersData: CreateUserDTO){
        const userEntity = new UserEntity()

        userEntity.id = uuid()
        userEntity.name = usersData.name
        userEntity.email = usersData.email
        userEntity.password = usersData.password
        
        this.userRepository.save(userEntity)
        return { 
            user : new ListUsersDTO(userEntity.name, userEntity.id),
            message : "User successfully created!"
        }
    }

    @Get()
    async showUsers(){
        const savedUsers = await this.userRepository.show()
        const usersList = savedUsers.map(user => new ListUsersDTO(user.name, user.id))

        return usersList
    }
}