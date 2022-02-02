import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NumericTypes } from 'mongoose';
import { Repository } from 'typeorm';
import { Articles } from './articles.entity';



@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(Articles)
        private articlesRepository: Repository<Articles>,
      ) {}

      async findAll(){
          return await this.articlesRepository.find();
      }

      async findArticleByID(id: number){
          return await this.articlesRepository.findOne({
                where: {
                    id: id
                }
          })
      }

      async findArticleByUser(userId: number){
          return await this.articlesRepository.findOne({
              where: {
                  authorId: userId
              }
          })
      }

      async updateArticle(id:number, data){
         await this.articlesRepository.update({id}, data);
         return await this.articlesRepository.findOne({
             where: {
                 id: id
             }
         });
      }

      async createOne(data){
         const newArticle = await this.articlesRepository.create(data);
         await this.articlesRepository.save(data);
         return newArticle;
      }

      async deleteOne(id: number){
          return await this.articlesRepository.delete({id});
      }

      
}
