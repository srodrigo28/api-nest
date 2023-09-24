import { Module } from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { TurmasController } from './turmas.controller';
import { Turma } from './entities/turma.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([Turma])],
  controllers: [TurmasController],
  providers: [TurmasService],
})
export class TurmasModule {}
