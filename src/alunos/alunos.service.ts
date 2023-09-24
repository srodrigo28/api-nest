import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlunosService {

  constructor(
    @InjectRepository(Aluno)
    private repository: Repository<Aluno>,
  ) {}

  async create(createAlunoDto: CreateAlunoDto) {
    const aluno = this.repository.create(createAlunoDto);
    return await this.repository.save(aluno);
  }

  /*** Listar todos comum
  findAll() {
    return this.repository.find();
  }
  */
 
  findAll() {
    return this.repository.find({
      relations: {
        turma: true
      }
    });
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id: id });
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return await this.repository.update(id, updateAlunoDto);
  }

  async remove(id: number) {
    return await this.repository.delete({id});
  }
}
