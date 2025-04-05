import { Injectable } from "@nestjs/common"

@Injectable()
export class UserRepository{
    private users = []

    async save(user){
        this.users.push(user)
    }

    async show(){
        return this.users
    }
}