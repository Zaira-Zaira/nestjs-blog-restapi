import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthentificationService {
    constructor(
        private userService: UsersService, 
        private jwtService: JwtService
      ) {}

    async login(email: string, password: string) {
        const payload = {email: email, password: password};
        const user = await this.userService.findByCredentials(email, password);
        const token = this.jwtService.sign(payload);
        return {user, token};
    }

    async loginJwt(user: any){
        const payload = {email: user.email, sub: user.id};
        return {
            jwt_token: this.jwtService.sign(payload),
        }
    }

    async register(email: string, password: string){
        const data = { email: email, password: password };
        return await this.userService.createOne(data);
    }

    async validateUser(email: string, password: string) {
       const user = await this.userService.findUserByPayload(email);
       if( user && user.password == password) {
           const {password, ...result} = user;
           return result;
       }
       return null;
    }
}

