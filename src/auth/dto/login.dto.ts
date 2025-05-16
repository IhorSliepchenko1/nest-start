import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class LoginRequest {
     @ApiProperty({
          description: "Почтовый адрес",
          example: "example@example.com"
     })
     @IsString({ message: "Почта должно быть строкой" })
     @IsNotEmpty({ message: "Имя обязательна к заполнению" })
     @IsEmail({}, { message: "Некорректный формат email" })
     email: string

     @ApiProperty({
          description: "Отображаемый пароль",
          example: "123456",
          minLength: 6,
          maxLength: 15,
     })
     @IsString({ message: "Пароль должен быть строкой" })
     @IsNotEmpty({ message: "Пароль обязателен к заполнению" })
     @MinLength(6, { message: "Пароль должен содержать не менее 6 символов" })
     @MaxLength(15, { message: "Пароль не должен превышать 15 символов" })
     password: string
}