import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AlunosModule } from './alunos/alunos.module';
import { TurmasModule } from './turmas/turmas.module';
import { join } from 'path';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutosModule } from './produtos/produtos.module';
import { UrlGeneratorModule } from 'nestjs-url-generator';
import { HateoasIndex } from './core/index-hateoas';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './commom/filters/http-exception.filter';

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
    CategoriaModule,
    ProdutosModule,
    UrlGeneratorModule.forRoot({
      appUrl: 'http://localhost:3000'
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    HateoasIndex,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})

export class AppModule {}
