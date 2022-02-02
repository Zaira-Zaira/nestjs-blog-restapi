import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { request } from 'express';
import { ArticlesService } from './articles.service';
import { CreateArticleDTO } from './create.article.dto';



@Controller('articles')
export class ArticlesController {
      constructor(private articleService: ArticlesService) {}
      @Get()
      async findAll(){
          const articles = await this.articleService.findAll();
          return {
              statusCode: HttpStatus.OK,
              message : "articles fetched",
              articles
          }
      }

      @Get(':id')
      async findArticleByID(@Param('id') id: number){
            const article = await this.articleService.findArticleByID(id);
            return {
                article
            }
      }

      @Get('user/:userId')
      async findArticleByUser(@Param('userId') id: number) {
          const article = await this.articleService.findArticleByUser(id);
          return article;
      }

      @Put(':id')
      async updateArticle(@Param('id') id: number, @Req() request){
         const {title, message, authorId} = request.body;
         const data = {title: title, message: message, authorId: authorId};
         await this.articleService.updateArticle(id, data);
         const newArticle = await this.articleService.findArticleByID(id);
         return newArticle;
      }

      @Post()
      async createOne(@Body() data: CreateArticleDTO, @Req() request) {
          const {title, message, authorId} = request.body;
          data = { title: title, message: message, authorId: authorId };
          const article = await this.articleService.createOne(data);
          return await this.articleService.findAll();
      }

      @Delete(':id')
      async deleteOne(@Param('id') id:number) {
          await this.articleService.deleteOne(id);
          return "article removed";
      }

}
