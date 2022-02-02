import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthentificationService {
    constructor(
        private userService: UsersService
      ) {}

    async login(email: string, password: string) {
        const user = await this.userService.findByCredentials(email, password);
        const token = "452336";
        return {user, token};
    }

    async register(email: string, password: string){
        const data = { email: email, password: password };
        return await this.userService.createOne(data);
    }
}

