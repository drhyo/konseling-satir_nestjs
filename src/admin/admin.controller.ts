import { Body, Controller, Post, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from 'src/dto/admin.dto';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';


@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}
    
    @Post()
    async create(@Body() payload: AdminDto, @Res() res: Response): Promise<any> {
        try {
            const result = await this.adminService.createAdmin(payload)
            const response: BaseResponseApi<boolean> = new BaseResponseApi(true, "success", result, res)
            return response.responseSucces()
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                status: false,
                message: "failed"
            })
            
        }
    }

    @Post('/login')
    async login(@Body() payload: AdminDto, @Res() res: Response): Promise<any> {
        try {
            const result = await this.adminService.loginAdmin(payload)
            const response = new BaseResponseApi<any>(true, "success", result, res)
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                status: false,
                message: "failed"
            })
            
        }
    }
}
