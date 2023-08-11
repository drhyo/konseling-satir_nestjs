import { BadRequestException, Body, Controller, Get, Post, Res, Req, UnauthorizedException, Delete, Logger } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserService } from './user.service';
import { BaseResponseApi } from '../response/response';

@Controller('user')
export class UserController {
  constructor(
    private readonly UserService: UserService,
    private readonly jwtService: JwtService
  ) { }

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.UserService.create({
      email,
      password: hashedPassword
    });
    delete user.password;

    return user;
  }
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response
  ) {
    const user = await this.UserService.findOne({ email });

    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new BadRequestException('Invalid credentials');
    }

    const jwt = await this.jwtService.signAsync({ id: user.id });

    response.cookie('jwt', jwt, { httpOnly: true });

    return {
      token: jwt,
      message: 'Login successful'
    };
  }

  @Get('users')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      if (!cookie) {
        throw new UnauthorizedException();
      }

      const data = await this.jwtService.verifyAsync(cookie);

      if (!data) {
        throw new UnauthorizedException();
      }

      const user = await this.UserService.findOne({ id: data['id'] });

      if (!user) {
        throw new UnauthorizedException();
      }

      const { password, ...result } = user;

      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');

    return {
      message: 'Logout successful'
    };
  }
}