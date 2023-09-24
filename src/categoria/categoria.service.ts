import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private repository: Repository<Categoria>,
  ){}

  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = this.repository.create(createCategoriaDto);
    return await this.repository.save(categoria);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({ id: id });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.repository.update(id, updateCategoriaDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
