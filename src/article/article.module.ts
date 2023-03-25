import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../entities/article.entity';
import { Image } from "../entities/image.entity";
import { Comment } from "../entities/comment";

@Module({
  imports: [TypeOrmModule.forFeature([Article,Image,Comment])],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {}
