import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    async create(@Body() payload: UserDto, @Res() res: Response ): Promise<any> {
        try{
            const result = await this.userService.createUser(payload)
            const response: BaseResponseApi<boolean> = new BaseResponseApi(true, "success", result, res )
            return response.responseSucces()
        } 
        catch(error) {
            console.log(error);           
            const response: BaseResponseApi<boolean> = new BaseResponseApi(false, "failed", error, res )
            return response.responseInternalError()
        }
    }


    @Post('/login')
    async login(@Body() payload: UserDto, @Res() res: Response): Promise<any> {
        try {
            const result = await this.userService.loginUser(payload)
            const response = new BaseResponseApi<any>(true, "success", result, res)
            return response.responseSucces()
        } catch (error) {
            console.log(error);        
            const response: BaseResponseApi<boolean> = new BaseResponseApi(false, "failed", error, res )
            return response.responseInternalError()
        }   
    }

    @Get()
    async getUser(@Res() res: Response): Promise<any> {
        try {
            const dataUser = await this.userService.getUser()
            const response = new BaseResponseApi<any>(true,'success', dataUser,res)
            return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found', error,res)
            return response.responDataNotFound
            
        }
    }
    

    // @Get(':id')
    // async getUserById(@Param('id') id: string ) {
    //     return await this.userService.getUserById(id)
    // }
}