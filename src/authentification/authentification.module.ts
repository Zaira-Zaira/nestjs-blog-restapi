import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';

@Module({
    imports: [
        UsersModule
    ],
    providers: [AuthentificationService],
    controllers: [AuthentificationController],
})
export class AuthentificationModule {}
