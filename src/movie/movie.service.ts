import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorEntity } from 'src/actors/entities/actor.entity';

@Injectable()
export class MovieService {
     constructor(
          @InjectRepository(MovieEntity)
          private readonly movieRepository: Repository<MovieEntity>,
          @InjectRepository(ActorEntity)
          private readonly actorRepository: Repository<ActorEntity>
     ) { }


     async findAll(): Promise<MovieEntity[]> {
          return await this.movieRepository.find({
               order: {
                    createdAt: 'DESC'
               }
          })
     }

     async findById(id: string): Promise<MovieEntity> {
          const movie = await this.movieRepository.findOne({
               where: { id },
               relations: ["actors"]
          })

          if (!movie) {
               throw new NotFoundException('Фильм не найден')
          }

          return movie
     }

     async create(dto: MovieDto): Promise<MovieEntity> {
          const { title, releaseYear, actorIds } = dto
          const actors = await this.actorRepository.find({
               where: {
                    id: In(actorIds)
               }
          })

          if (!actors || !actors.length) throw new NotFoundException('Актёры не найдены')

          const movie = this.movieRepository.create({
               title,
               releaseYear,
               actors
          })
          return await this.movieRepository.save(movie)
     }

     async update(id: string, dto: MovieDto): Promise<boolean> {
          const movie = await this.findById(id)
          Object.assign(movie, dto)

          await this.movieRepository.save(movie)

          return true
     }

     async delete(id: string): Promise<string> {
          const movie = await this.findById(id)
          await this.movieRepository.remove(movie)
          return id
     }

}
