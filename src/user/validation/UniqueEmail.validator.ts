import { registerDecorator, ValidationArguments, ValidationOptions, Validator, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface{

    constructor(private userRepository: UserRepository){

    }

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const existingEmailUser = await this.userRepository.existingEmail(value)
        return !existingEmailUser
    }

}

export const UniqueEmail = (validationOptions: ValidationOptions) => {
    return(object: Object, property : string) => {
        registerDecorator({
            target : object.constructor,
            propertyName : property,
            options : validationOptions,
            constraints : [],
            validator : UniqueEmailValidator
        })
    }
}