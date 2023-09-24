import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'app-nest',
      entities: [__dirname + '/../**/*.entity(.ts, .js'],
      synchronize: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
