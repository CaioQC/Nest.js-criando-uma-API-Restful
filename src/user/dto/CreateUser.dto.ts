import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/UniqueEmail.validator";


export class CreateUserDTO{
    @IsNotEmpty({ message : "must not be empty" })
    name : string;

    @IsEmail(undefined, { message : "must be a valid email" })
    @UniqueEmail({ message : "There is already a user with this email" })
    email : string;

    @MinLength(6, { message : "must have at least 6 characters" })
    password : string;
}