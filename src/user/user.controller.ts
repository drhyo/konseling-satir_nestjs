import { BadRequestException, Body, Controller, Get, Post, Res, Req, UnauthorizedException, Delete } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { UserService } from './user.service';
import { BaseResponseApi } from 'src/response/response';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await this.userService.create({
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
    const user = await this.userService.findOne({ email });

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

      const user = await this.userService.findOne({ id: data['id'] });

      if (!user) {
        throw new UnauthorizedException();
      }

      const { password, ...result } = user;

      return result;
    } catch (e) {
        console.log(e);
        
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



















// import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserDto } from 'src/dto/user.dto';
// import { Response } from 'express';
// import { BaseResponseApi } from 'src/response/response';

// @Controller('user')
// export class UserController {
//     constructor(private userService: UserService){}

//     @Post()
//     async create(@Body() payload: UserDto, @Res() res: Response ): Promise<any> {
//         try{
//             const result = await this.userService.createUser(payload)
//             const response: BaseResponseApi<boolean> = new BaseResponseApi(true, "success", result, res )
//             return response.responseSucces()
//         } 
//         catch(error) {
//             console.log(error);           
//             const response: BaseResponseApi<boolean> = new BaseResponseApi(false, "failed", error, res )
//             return response.responseInternalError()
//         }
//     }


//     @Post('/login')
//     async login(@Body() payload: UserDto, @Res() res: Response): Promise<any> {
//         try {
//             const result = await this.userService.loginUser(payload)
//             const response = new BaseResponseApi<any>(true, "success", result, res)
//             return response.responseSucces()
//         } catch (error) {
//             console.log(error);        
//             const response: BaseResponseApi<boolean> = new BaseResponseApi(false, "failed", error, res )
//             return response.responseInternalError()
//         }   
//     }

//     @Get()
//     async getUser(@Res() res: Response): Promise<any> {
//         try {
//             const dataUser = await this.userService.getUser()
//             const response = new BaseResponseApi<any>(true,'success', dataUser,res)
//             return response.responseSucces()
            
//         } catch (error) {
//             console.log(error);
//             const response = new BaseResponseApi<any>(false,'Not Found', error,res)
//             return response.responDataNotFound
            
//         }
//     }
    

    // @Get(':id')
    // async getUserById(@Param('id') id: string ) {
    //     return await this.userService.getUserById(id)
    // }
// }