import { MovieEntity } from "src/movie/entities/movie.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "reviews" })
export class ReviewEntity {
     @PrimaryGeneratedColumn('uuid')
     id: string;

     @Column({
          type: 'text',
     })
     text: string

     @Column({
          type: 'decimal',
          precision: 3,
          scale: 1,
          default: 0.0,
     })
     rating: number

     @Column({
          name: 'movie_id',
          type: 'uuid',
     })
     movieId: string

     @JoinColumn({ name: 'movie_id' })
     @ManyToOne(() => MovieEntity, movie => movie.reviews, { onDelete: "CASCADE" })
     movie: MovieEntity

     @CreateDateColumn({
          name: "created_at",
     })
     createdAt: Date

     @UpdateDateColumn({
          name: "updated_at",
     })
     updatedAt: Date
}