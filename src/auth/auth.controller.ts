import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterRequest } from './dto/register.dto';
import { LoginRequest } from './dto/login.dto';
import { Request, Response } from 'express';
import { ApiBadRequestResponse, ApiConflictResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AuthResponse } from './dto/auth.dto';
import { Authorized } from './decorators/authorized.decorator';
import { Authorization } from './decorators/authorization.decorator';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @ApiOperation({
    summary: "Создание аккаунта",
    description: "Создание нового аккаунта"
  })
  @ApiOkResponse({
    type: AuthResponse
  })
  @ApiConflictResponse({
    description: "Пользователь с такой почтой уже существует"
  })
  @ApiBadRequestResponse({
    description: 'Некорректные входные данные'
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Res({ passthrough: true }) res: Response, @Body() dto: RegisterRequest) {
    return await this.authService.register(res, dto)
  }

  @ApiOperation({
    summary: "Вход в систему",
    description: "Вход в систему по аккаунту"
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Res({ passthrough: true }) res: Response, @Body() dto: LoginRequest) {
    return await this.authService.login(res, dto)
  }

  @ApiOperation({
    summary: "Обновление токена",
    description: "Создание нового токена доступа"
  })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
    return await this.authService.refresh(req, res)
  }


  @ApiOperation({
    summary: "Выход из системы",
    description: "Удаление токена доступа"
  })
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Res({ passthrough: true }) res: Response) {
    return await this.authService.logout(res)
  }

  @Authorized()
  @Get('@me')
  @HttpCode(HttpStatus.OK)
  async me(@Authorization() user: User) {
    return user
  }
}
