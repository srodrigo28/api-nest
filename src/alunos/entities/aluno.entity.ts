import { Turma } from "src/turmas/entities/turma.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Aluno {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    genero: string;

    @ManyToOne(() => Turma, (turma) => turma.aluno)
    @JoinColumn({ name: 'turma_id'})
    turma: Turma;

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
