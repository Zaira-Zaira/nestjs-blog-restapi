import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
      ) {}


      async findAll() {
          return await this.usersRepository.find();
      }

      async findOne(id: number) {
          return await this.usersRepository.findOne({
              where: {
                  id : id
              }
          })
      }
      async updateOne(id: number) {
          const data = {email: "test@gmail.com", password: "passchanged"};
          await this.usersRepository.update({id}, data);
          return await this.usersRepository.findOne({id});
      }

      async createOne(data) {
          data = {email: "alice@gmail.com", password: "alice"};
          const newUser = await this.usersRepository.create(data);
          await this.usersRepository.save(data);
          return newUser;
      }

      async deleteOne(id: number){
          return await this.usersRepository.delete(id);
      }
}
