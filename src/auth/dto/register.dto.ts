import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class RegisterRequest {
     @IsString({ message: "Имя должно быть строкой" })
     @IsNotEmpty({ message: "Имя обязательно к заполнению" })
     @MaxLength(50, { message: "Имя не должно превышать 50 символов" })
     name: string

     @IsString({ message: "Почта должно быть строкой" })
     @IsNotEmpty({ message: "Имя обязательна к заполнению" })
     @IsEmail({}, { message: "Некорректный формат email" })
     email: string

     @IsString({ message: "Пароль должен быть строкой" })
     @IsNotEmpty({ message: "Пароль обязателен к заполнению" })
     @MinLength(6, { message: "Пароль должен содержать не менее 6 символов" })
     @MaxLength(15, { message: "Пароль не должен превышать 15 символов" })
     password: string
}