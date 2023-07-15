import { Controller, Get, Res } from '@nestjs/common';
import { BannerPageService } from './banner-page.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('banner-page')
export class BannerPageController {
    constructor(private bannerPageService: BannerPageService) 
    { }

    @Get()
    async findAllBanner(@Res() res: Response) {
        try {
        const data = await this.bannerPageService.findAllBannerWithImage()
        const response = new BaseResponseApi<any>(true,'success',data,res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
            
        }
    }
}
