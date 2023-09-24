import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutosService {

  constructor(
    @InjectRepository(Produto)
    private repository: Repository<Produto>
  ){}

  async create(createProdutoDto: CreateProdutoDto) {
    const produto = this.repository.create(createProdutoDto);
    return await this.repository.save(produto);
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({id});
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return await this.repository.update(id, updateProdutoDto);
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
