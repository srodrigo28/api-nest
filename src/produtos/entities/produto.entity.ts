import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Produto {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false, length: 30 })
    nome: string;

    @Column({ nullable: false, length: 50 })
    descricao: string;

    @Column({ nullable: false })
    quantidade: number;

    @Column({ nullable: false })
    valor: number;

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date;

}
