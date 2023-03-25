import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from '../entities/article.entity';
import { Image } from "../entities/image.entity";
import getStream from "get-stream";
import { readFileSync } from "fs";
import { Comment } from "../entities/comment";

const fs = require("fs");
@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository:Repository<Article> ,
    @InjectRepository(Image)
    private readonly ImageRepository:Repository<Image> ,
    @InjectRepository(Comment)
    private readonly CommentRepository:Repository<Comment> ,
  ) {}

  async createArticle(article: CreateArticleDto) {
    const newAricle= new Article();
    
    const {title , author , text} = article
    newAricle.title = title;
    newAricle.author = author ;
    newAricle.text = text ;

    return await this.articleRepository.save(newAricle);

  }

  async findAllarticles() {
    return await this.articleRepository.find() ;
  }

  async findOnearticle(id: number){
    let filobject=null
    let comments:Comment[]
    let file:Image=await this.ImageRepository.findOneBy({
      articleId: id
    })
   let typefile=null
    if(file){
      try{
        filobject=await fs.readFileSync('uploads/'+file.filename)
      }
      catch (e){
        console.error(e)
      }
      typefile=file.mimetype
    }

    let article:Article=await this.articleRepository.findOne({where: {id}});
    comments=await this.CommentRepository.findBy({
      arcticleId:id
    })
    return {article:article,image: filobject,imagetype:typefile,comments:comments}
  }


  async saveImage(image,id) {
    let NewImage:Image=new Image()
    NewImage.articleId=id;
    NewImage.destination=image.destination
    NewImage.path=image.path
    NewImage.size=image.size
    NewImage.path=image.path
    NewImage.filename=image.filename
    NewImage.mimetype=image.mimetype

    return this.ImageRepository.save(NewImage)
  }

  async addComment(comment: Comment) {
    return await this.CommentRepository.save(comment)
  }

}
