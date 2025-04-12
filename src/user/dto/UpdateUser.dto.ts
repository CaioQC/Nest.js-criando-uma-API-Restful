import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { UniqueEmail } from "../validation/UniqueEmail.validator";


export class UpdateUserDTO{
    @IsOptional()
    @IsNotEmpty({ message : "must not be empty" })
    name : string;

    @IsOptional()
    @IsEmail(undefined, { message : "must be a valid email" })
    @UniqueEmail({ message : "There is already a user with this email" })
    email : string;

    @IsOptional()
    @MinLength(6, { message : "must have at least 6 characters" })
    password : string;
}