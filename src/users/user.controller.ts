import { Body, Controller, Get, Inject, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UserDto } from "src/user.dto";
import { ModuleRef } from "@nestjs/core";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService) {
    }

    @Get()
    getAllUsers() {
        return [{
            name: 'duc',
            age: 18
        }]
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        return 'test';
    }

    @UsePipes(new ValidationPipe())
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        return this.userService.createUser(user);
    }
}