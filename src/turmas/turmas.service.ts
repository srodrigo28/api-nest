import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Turma } from './entities/turma.entity';

@Injectable()
export class TurmasService {

  constructor(
    @InjectRepository(Turma)
    private repository: Repository<Turma>
  ){}
  
  async create(createTurmaDto: CreateTurmaDto) {
    const turma = this.repository.create(createTurmaDto);
    return await this.repository.save(turma);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({id});
  }

  async update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return await this.repository.update(id, updateTurmaDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
