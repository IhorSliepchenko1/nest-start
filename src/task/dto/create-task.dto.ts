import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsPositive, IsString, Length } from "class-validator";

export enum TaskTag {
     WORK = 'work',
     STUDY = 'study',
     HOME = 'home',
}

export class CreateTaskDto {
     @IsString()
     @IsNotEmpty()
     @Length(2, 10)
     title: string

     @IsString({ message: 'Описсание должно быть строкой' })
     @IsOptional()
     description: string


     @IsInt({ message: 'Приоритет должен быть целым числом' })
     @IsPositive({ message: "Приоритет должен положительным числом" })
     @IsOptional()
     priority: number

     @IsArray({ message: "Теги должны быть массивом" })
     @IsEnum(TaskTag, {
          message: "Недопустимое значение", each: true

     })
     @IsOptional()
     tags: TaskTag[]
}


