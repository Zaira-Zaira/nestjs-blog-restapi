import { Controller, HttpStatus, Get, Param, Post, Res, Put, Body, Delete } from '@nestjs/common';
import { response } from 'express';
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
        users
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
