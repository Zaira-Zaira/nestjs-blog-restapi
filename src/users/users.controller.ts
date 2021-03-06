import { Controller, HttpStatus, Get, Param, Post, Res, Put, Body, Delete, Req } from '@nestjs/common';
import { Response, response } from 'express';
import { AppService } from 'src/app.service';
import { CreateUserDTO } from './create.user.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll() {
      const users =  await this.usersService.findAll();
      return {
        statusCode: HttpStatus.OK,
        message: 'Users fetched successfully',
        users,
      };
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      const user = await this.usersService.findOne(id);
      return {
        statusCode: HttpStatus.OK,
        message: "User has been found by his id", 
        user,
      };
    }

    async findUserByPayload(@Req() request){
      const {email} = request.body;

      const user = this.usersService.findUserByPayload(email);

      return {
        message: "user founded by payload",
        user
      }
    }
    @Put(':id')
    async updateOne(@Param('id') id: number) {
       await this.usersService.updateOne(id);
       const user = await this.usersService.findOne(id);
       return {
         statusCode: HttpStatus.OK, 
         message: "user updated", 
         user,
       }
    }

    @Post()
    async createOne(@Body() data: CreateUserDTO) {
       const newUser = await this.usersService.createOne(data);
       return {
         statusCode: HttpStatus.CREATED,
         message: "new user created", 
         newUser,
       }
    }
    
    @Delete()
    async deleteOne(@Param('id') id: number) {
      await this.usersService.deleteOne(id);
      return {
        statusCode: HttpStatus.OK, 
        message: "user deleted", 
      }
    }

}
