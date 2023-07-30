import { Controller, Get, Param, Res } from '@nestjs/common';
import { AboutPageService } from './about-page.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('about-page')
export class AboutPageController {
    constructor(private aboutPageService: AboutPageService) 
    { } 

    @Get()
    async findData(@Res() res: Response, @Param('id') id: number): Promise<any> {
        try {
        const data = await this.aboutPageService.findDataWithImage(id)
        const response = new BaseResponseApi<any> (true,'success',data,res)
        return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any> (false,'Not Found',error,res)
            return response.responDataNotFound()
            
        }
    }
}
