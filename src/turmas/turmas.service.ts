import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';

@Injectable()
export class TurmasService {
  create(createTurmaDto: CreateTurmaDto) {
    return 'This action adds a new turma';
  }

  findAll() {
    return `This action returns all turmas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turma`;
  }

  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return `This action updates a #${id} turma`;
  }

  remove(id: number) {
    return `This action removes a #${id} turma`;
  }
}
