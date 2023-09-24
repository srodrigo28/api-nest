import { Module } from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { TurmasController } from './turmas.controller';

@Module({
  controllers: [TurmasController],
  providers: [TurmasService],
})
export class TurmasModule {}
