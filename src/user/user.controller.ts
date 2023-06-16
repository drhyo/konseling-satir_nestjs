import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    async create(@Body() payload: UserDto, @Res() res: Response ): Promise<any> {
        try{
            const result = await this.userService.createUser(payload)
            return res.status(201).json({
                status: true,
                message: "failed",
                data: result
            })
        } 
        
        
        catch(e) {
            console.log(e);
            
            return res.status(500).json({
                status: false,
                message: "failed "
            })
            

        }
    }

}