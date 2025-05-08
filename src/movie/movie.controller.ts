import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieDto } from './dto/movie.dto';

@Controller('movies')

export class MovieController {
  constructor(private readonly movieService: MovieService) { }

  @Get()
  findAll() {
    return this.movieService.findAll()
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id)
  }

  @Post()
  create(@Body() dto: MovieDto) {
    return this.movieService.create(dto)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: MovieDto) {
    return this.movieService.update(id, dto)
  }


  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id)
  }
}


// @Get()
// findAll(@Query() query: any) {
//   return JSON.stringify(query)
// }

// @Post()
// create(@Body() body: { title: string, genre: string }) {
//   return body
// }

// @Get('headers')
// getHeaders(@Headers("user-agent") userAgent: string) {
//   return userAgent
// }

// @Get('request')
// getRequelsDetails(@Req() req: Request) {
//   return {
//     method: req.method
//   }
// }

// @Get('response')
// getResponseDetails(@Res() res: Response) {
//   res.status(201).json({ message: 'Hello' })
// }

// @Get(":id/test/:id_2")
// findId(@Param('id') id: string, @Param('id_2') id_2: string) {
//   return { id, id_2 }

// }