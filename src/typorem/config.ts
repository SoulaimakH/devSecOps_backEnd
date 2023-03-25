import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Article } from 'src/entities/article.entity';
import { User } from "../entities/user";
import { TodoEntity } from "../entities/todo.entity";
import { Image } from "../entities/image.entity";
import { Comment } from "../entities/comment";


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor() {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bdangularproject',
      entities: [User , Article,TodoEntity,Image,Comment],
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}