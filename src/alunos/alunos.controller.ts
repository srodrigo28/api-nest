import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { ResponseAlunoDto } from './dto/response-aluno.dto';
import { HateoasAluno } from 'src/core/aluno-hateoas';

@Controller('alunos')
export class AlunosController {
  constructor(
    private readonly alunosService: AlunosService, 
    private alunosHateoas: HateoasAluno) {}

  @Post()
  async create(@Body() createAlunoDto: CreateAlunoDto) {
    const response: ResponseAlunoDto = await this.alunosService.create(
      createAlunoDto,
    );
    response.links = this.alunosHateoas.gerarLinksHateoas(response.id);
    return await response;
  }

  @Get()
  async findAll(@Query('page') page=1, @Query('limit') limit = 2 ) {
    limit = limit > 2 ? 2 : limit;
    const alunos = await this.alunosService.findAll({ page, limit});
    alunos.items.map((aluno) => {
      const response: ResponseAlunoDto = aluno;
      response.links = this.alunosHateoas.gerarLinksHateoas(response.id);
      return response;
    })
    return alunos;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response: ResponseAlunoDto = await this.alunosService.findOne(+id);
    response.links = this.alunosHateoas.gerarLinksHateoas(response.id);
    return response;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(+id, updateAlunoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alunosService.remove(+id);
  }
}
