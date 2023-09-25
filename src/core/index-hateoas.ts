import { AlunosController } from "src/alunos/alunos.controller";
import { HateoasBase } from "./hateoas-base";
import { HateoasLinks } from "./hateoas-interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class HateoasIndex extends HateoasBase{
    gerarLinksHateoas(id?: number): HateoasLinks[] {
        this.LINKS = [];
        
        /** Cadastrar Aluno */
        this.adicionarLinks(
            'POST', 
            'cadastrar_aluno', 
            AlunosController,
            AlunosController.prototype.create,
        );

         /** Listar Aluno */
         this.adicionarLinks(
            'GET', 
            'listar_alunos', 
            AlunosController,
            AlunosController.prototype.findAll,
        );

        return this.LINKS;
    }

}