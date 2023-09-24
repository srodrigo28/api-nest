import { Turma } from "src/turmas/entities/turma.entity";

export class CreateAlunoDto {
    nome: string;
    genero: string;
    turma: Turma;
}
