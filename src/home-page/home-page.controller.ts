import { Controller, Get, Param, Res } from '@nestjs/common';
import { HomePageService } from './home-page.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('home-page')
export class HomePageController {
    constructor(private homePageService: HomePageService) 
    { } 

    @Get()
    async findData(@Res() res: Response,@Param('id') id: number): Promise<any> {
        try {
        const data = await this.homePageService.findDataWithImage(id)
        const response = new BaseResponseApi<any> (true,'success',data,res)
        return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any> (false,'Not Found',error,res)
            return response.responDataNotFound()
            
        }
    }


}
