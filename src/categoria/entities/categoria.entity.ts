import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    nome: string;
}
