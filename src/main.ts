import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  // валидация ошибок во всём проекте
  app.useGlobalPipes(new ValidationPipe())
  // глобальный префикс
  // app.setGlobalPrefix('api')
  await app.listen(process.env.PORT || 3000);
}

bootstrap();