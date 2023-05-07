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
      host:process.env.MYSQL_DB_HOST,
      port: Number.parseInt(process.env.MYSQL_DB_PORT),
      username: process.env.MYSQL_DB_USER,
      password: process.env.MYSQL_DB_PASS,
      database: process.env.MYSQL_DB_NAME,
      entities: [User , Article,TodoEntity,Image,Comment],
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}