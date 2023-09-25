import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { Repository } from 'typeorm';
import { AlunoNotFoundException } from './exceptions/AlunoNotFoundException';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';

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
 
  async findAll(options: IPaginationOptions) {
    const query = this.repository
    .createQueryBuilder('aluno')
    .leftJoinAndSelect('aluno.turma', 'turma')
    .orderBy('aluno.id', 'ASC')


    return await paginate(query, options);
  }

  async findOne(id: number) {
    try{
      return await this.repository.findOneByOrFail({id: id});
    }catch(error){
      console.log(error.name);
      if(error.name === 'EntityNotFoundError'){
        throw new HttpException(
          'Aluno não encontrado',HttpStatus.NOT_FOUND
        );
      }
      throw new HttpException(
        'Erro Interno servidor Offline', HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
      return await this.repository.update(id, updateAlunoDto);
  }

  async remove(id: number) {
    const response = await this.repository.delete({id});

    if( response.affected === 0){
      throw new AlunoNotFoundException();
    }

    return await this.repository.delete({id});
  }
}
