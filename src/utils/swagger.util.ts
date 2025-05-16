import { INestApplication } from "@nestjs/common";
import { SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "src/app.module";
import { AuthModule } from "src/auth/auth.module";
import { getSwaggerConfig } from "src/config/swagger.dto";

export function setupSwagger(app: INestApplication<any>) {
     const config = getSwaggerConfig()

     const document = SwaggerModule.createDocument(app, config, {
          include: [AppModule, AuthModule]
     })

     SwaggerModule.setup('/swagger', app, document)
}