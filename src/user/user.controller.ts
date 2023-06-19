import { Body, Controller, Post, Res } from '@nestjs/common';
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
        catch(e) {
            console.log(e);
            
            return res.status(500).json({
                status: false,
                message: "failed "
            })
        }
    }


    @Post('/login')
    async login(@Body() payload: UserDto, @Res() res: Response): Promise<any> {
        try {
            const result = await this.userService.loginUser(payload)
            const response = new BaseResponseApi<any>(true, "success", result, res)
            return response.responseSucces()
        } catch (e) {
            return res.status(500).json({
                status: false,
                message: "failed"
            })            
        }   
    }

    
}