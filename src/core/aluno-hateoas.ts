import { AlunosController } from "src/alunos/alunos.controller";
import { HateoasBase } from "./hateoas-base";
import { HateoasLinks } from "./hateoas-interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class HateoasAluno extends HateoasBase{
    gerarLinksHateoas(id?: number): HateoasLinks[] {
        this.LINKS = [];
        
        const params = {
            id: id
        };
        /** FindOne */
        this.adicionarLinks(
            'GET', 
            'detalhes_aluno', 
            AlunosController,
            AlunosController.prototype.findOne,
            params,
        );

        /** Update */
        this.adicionarLinks(
            'PATCH', 
            'atualizar_aluno', 
            AlunosController,
            AlunosController.prototype.update,
            params,
        );

        /** Remove */
        this.adicionarLinks(
            'DELETE', 
            'excluir_aluno', 
            AlunosController,
            AlunosController.prototype.remove,
            params,
        );

        return this.LINKS;
    }

}