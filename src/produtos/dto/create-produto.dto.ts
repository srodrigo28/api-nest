import { IsNotEmpty, IsString, IsNumber, Length, Min, Max } from "class-validator"

export class CreateProdutoDto {

    @IsNotEmpty( {message: "Esse campo nome não pode ser em branco!" } )
    @IsString( {message: "Esse campo precisa ser string ou texto"} )
    @Length( 3, 30, {message: "Esse campo precisa ter pelo menos 3 ou máximo 30 caractéries"} )
    nome: string;

    @IsNotEmpty( {message: "Esse campo descrição não pode ser em branco!" } )
    @IsString( {message: "Esse campo precisa ser string ou texto"} )
    @Length( 3, 30, {message: "Esse campo precisa ter pelo menos 3 ou máximo 30 caractéries"} )
    descricao: string;

    @IsNotEmpty( {message: "Esse campo quantidade não pode ser em branco!" } )
    @IsNumber( {}, {message: "Preço de uma quantidade inicial"} )
    @Min(1)
    @Max(9999)
    quantidade: number;

    @IsNotEmpty( {message: "Esse campo preço ou valor não pode ser em branco!" } )
    @IsNumber( {}, {message: "Preço de um preço ou valor inicial"} )
    @Min(1)
    valor: number
}
