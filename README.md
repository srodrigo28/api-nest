## Treinamento NestJS

### Configurando projeto
* Link :: Treina Web
```
https://www.treinaweb.com.br/painel/cursos/nestjs-desenvolvimento-de-apis-rest/aula/2/subaula/1
https://docs.nestjs.com/first-steps
```

* Instalação global
```
npm i -g @nestjs/cli
```

* Criando um projeto
```
npx nest new project-name
```

* Entrar na pasta do projeto 
```
cd api-nest
```

* Iniciando ou rodando o projeto
```
npm run start
```

### Dependências
* Inicio
```
npm i typeorm @nestjs/typeorm mysql2
```

```
npm i typeorm-naming-strategies
```

### Arquivos trabalhados

* app.modules.ts --> configurando o modulo typeORM e banco de dados

#### Memoraveis Modulo 3.
* Modulo principal
```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AlunosModule } from './alunos/alunos.module';
import { TurmasModule } from './turmas/turmas.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'app-nest',
      entities: [join(__dirname, '**/*entity.{ts,js}')],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    AlunosModule,
    TurmasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
```

* Entity aluno
```
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

```

* Entity turma
```
import { Aluno } from "src/alunos/entities/aluno.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Turma {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ nullable: false })
    descricao: string;

    @OneToMany( () => Aluno, (aluno) => aluno.turma )
    aluno: Aluno;

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

```

#### Memoraveis Modlo 4.

### Comandos Nest

* Criando
```
npx nest g res alunos
```