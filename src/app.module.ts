import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { ConfigModule } from '@nestjs/config';
import { ReviewModule } from './review/review.module';
import { ActorsModule } from './actors/actors.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true
    }),

    PrismaModule,
    MovieModule,
    ReviewModule,
    ActorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
