/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, AuthLog } from './dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("signup")
    signup(@Body() dto: AuthDto) {
        return this.authService.signup (dto)
    }

    @Post("login")
    login(@Body() dto : AuthLog){
        return this.authService.login(dto)
    }
    

}
