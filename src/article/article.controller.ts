import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from "@nestjs/common";
import { Public } from 'src/decorators/public.decorator';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { FileInterceptor } from "@nestjs/platform-express";
import { Comment } from "../entities/comment";

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Public()
  @Post('')
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.createArticle(createArticleDto);
  }
  @Public()
  @Get('articleList')
  findAll() {
    return this.articleService.findAllarticles();
  }
  @Public()
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOnearticle(+id);
  }

  @Public()
  @Post('/image/:id')
  @UseInterceptors(FileInterceptor('image', { dest: './uploads' }))
  addimage(@Param('id') id: string,@UploadedFile() file) {
   return this.articleService.saveImage(file,id)
  }
  @Public()
  @Post('/comment')
  addComment(@Body() comment :Comment) {
    return this.articleService.addComment(comment)
  }

}
