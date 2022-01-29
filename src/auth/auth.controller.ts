import { Controller, Get, Post, Req } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Req() request) {
        return await this.authService.login(request.user);
    }
    @Post('register')
    async register(@Req() request) {
        return await this.authService.register(request.user);
    }

    @Get()
    async getAll(){
        return  {
            message: 'find all',
        }
    }
}
