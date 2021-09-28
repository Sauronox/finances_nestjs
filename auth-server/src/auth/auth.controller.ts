import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Request } from 'express';
import { UserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Req() req: Request) {
        return this.authService.login(req.user);
    }

    @Post('/register')
    async register(@Body() userDto: UserDto){
        const user = await this.authService.register(userDto);
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/verification')
    async verification(){
        return {result: 'success'}
    }

}
