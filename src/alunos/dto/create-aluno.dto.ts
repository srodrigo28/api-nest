import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty, IsString, Length } from "class-validator";
import { Turma } from "src/turmas/entities/turma.entity";

export class CreateAlunoDto {
    @ApiProperty({
        example: 'Maria Silva',
        description: "Nome compelto do aluno."
    })
    @IsNotEmpty({ message: "Nome não pode ser em branco"})
    @IsString({ message: "Nome deve ser uma string" })
    @Length(3, 30, { message: "Nome precisa ter no minimo 3 caractéries e máximo 30"})
    @Expose({ name: 'nome_completo' })
    nome: string;

    @ApiProperty({
        example: 'Masculino ou Feminino',
        description: "genero e o sexo da pessoa"
    })
    @IsNotEmpty({ message: "Genero não cadastrar em branco"})
    @IsString({ message: "Genero deve ser uma string" })
    @Length(3, 30, { message: "Nome precisa ter no minimo 3 caractéries e máximo 30"})
    genero: string;

    @ApiProperty({
        example: 1,
        description: "id relacionado a tabela turma que está no banco de dados"
    })
    @IsNotEmpty({ message: "Turma não cadastrar em branco"})
    @IsString({ message: "Turma deve ser uma string" })
    turma: Turma;

}
