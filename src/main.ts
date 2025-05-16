import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'
import { setupSwagger } from './utils/swagger.util';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())
  setupSwagger(app)
  
  await app.listen(process.env.PORT || 3000);
}

bootstrap();