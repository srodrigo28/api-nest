import { HttpException, HttpStatus } from "@nestjs/common";

export class AlunoNotFoundException extends HttpException{
    constructor(message?: string, status?: HttpStatus){
        super(message || 'Aluno não encontrado', status || HttpStatus.NOT_FOUND);
    }
}