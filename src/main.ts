import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // валидация ошибок во всём проекте
  app.useGlobalPipes(new ValidationPipe())
  // глобальный префикс
  // app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
