import {IsNotEmpty, IsString, Length} from "class-validator";


export class CreateCategoriaDto {
    @IsNotEmpty({ message: ""})
    @IsString({ message: ""})
    @Length( 3, 30, { message: "A categoria para ser criada precisa ter no mínimo 3, e máximo 30 caractéries"})
    nome: string;
}
