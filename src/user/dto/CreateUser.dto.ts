import { IsEmail, IsNotEmpty, MinLength } from "class-validator";


export class CreateUserDTO{
    @IsNotEmpty({ message : "must not be empty" })
    name : string;

    @IsEmail(undefined, { message : "must be a valid email" })
    email : string;

    @MinLength(6, { message : "must have at least 6 characters" })
    password : string;
}