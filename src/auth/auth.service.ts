import { Body, HttpCode, HttpStatus, Injectable, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
     constructor(
         private userService: UsersService, private jwtService: JwtService
         ) {}

     async login(user: any) {
         const payload = {email: user.email, password: user.password};
         const token = this.jwtService.sign(payload);
         console.log(token);
         return {token};
     }

     async register(@Body() body){
        const { email, password } = body;
        const user = await this.userService.createOne({ email, password });
        return {
            statusCode: HttpStatus.OK,
            message: "user created",
            user,
        }
     }
    }
