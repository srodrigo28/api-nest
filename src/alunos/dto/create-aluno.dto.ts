import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { Turma } from "src/turmas/entities/turma.entity";

export class CreateAlunoDto {

    @IsNotEmpty({ message: "Nome não pode ser em branco"})
    @IsString({ message: "Nome deve ser uma string" })
    @Length(3, 30, { message: "Nome precisa ter no minimo 3 caractéries e máximo 30"})
    @Expose({ name: 'nome_completo' })
    nome: string;

    @IsNotEmpty({ message: "Genero não cadastrar em branco"})
    @IsString({ message: "Genero deve ser uma string" })
    @Length(3, 30, { message: "Nome precisa ter no minimo 3 caractéries e máximo 30"})
    genero: string;

    @IsNotEmpty({ message: "Turma não cadastrar em branco"})
    @IsString({ message: "Turma deve ser uma string" })
    turma: Turma;
}
