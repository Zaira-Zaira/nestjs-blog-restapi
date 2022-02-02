import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';



@Controller('authentification')
export class AuthentificationController {
    constructor(private authService: AuthentificationService) {}
   
    @Post()
    async login(@Body() data) {
        const {email, password} = data;
       const user = await this.authService.login(email, password);
       return {
           message: "user loged in", 
           statusCode: HttpStatus.OK, 
           user
       }
    }

    @Post('register')
    async register(@Body() data) {
        const {email, password} = data;
        const newuser = await this.authService.register(email, password);
        return {
            message: "user registered",
            statusCode: HttpStatus.OK, 
            newuser
        }
    }
}
