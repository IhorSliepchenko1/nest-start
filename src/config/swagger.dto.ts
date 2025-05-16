import { DocumentBuilder } from "@nestjs/swagger";

export function getSwaggerConfig() {
     return new DocumentBuilder()
          .setTitle('Nest course')
          .setDescription('Описание')
          .setVersion('1.1.1')
          .setContact('igor', 'https.lkdlk', 'kjk')
          .addBearerAuth()
          .build()
}




