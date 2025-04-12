import { Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity"

@Injectable()
export class UserRepository{
    private users : UserEntity[] = []

    async save(user : UserEntity){
        this.users.push(user)
    }

    async show(){
        return this.users
    }

    async existingEmail(email : string){
        const possibleUser = this.users.find(
            user => user.email === email
        )

        return possibleUser !== undefined
    }

    async findByID(id: string){
        const possibleUser = this.users.find(
            savedUser => savedUser.id === id 
        )

        if(!possibleUser){
            throw new Error("User not found!")
        }

        return possibleUser
    }

    async update(id : string, updateData : Partial<UserEntity>){
        const user = this.findByID(id)

        Object.entries(updateData).forEach(([key, value]) => {
            if(key === "id"){
                return
            }

            user[key] = value
        })

        return user
    }

    async delete(id: string){
        const user = this.findByID(id)
        this.users = this.users.filter(
            savedUser => savedUser.id !== id
        )

        return user
    }
}