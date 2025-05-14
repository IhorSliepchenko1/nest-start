import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Nest course')
    .setDescription('kjjkhjhjh')
    .setVersion('1.1.1')
    .setContact('igor', 'https.lkdlk', 'kjk')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    include: [AppModule]
  })

  SwaggerModule.setup('/swagger', app, document)

  await app.listen(process.env.PORT || 3000);
}

bootstrap();