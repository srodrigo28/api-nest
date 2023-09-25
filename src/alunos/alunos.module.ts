import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { HateoasAluno } from 'src/core/aluno-hateoas';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  controllers: [AlunosController],
  providers: [AlunosService, HateoasAluno],
})
export class AlunosModule {}
