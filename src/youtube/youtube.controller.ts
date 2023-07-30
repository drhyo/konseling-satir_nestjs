import { Controller, Get, Res } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('youtube')
export class YoutubeController {
    constructor( private youtubeServis: YoutubeService )
    {}

    @Get()
    async findAllBanner(@Res() res: Response) {
        try {
        const data = await this.youtubeServis.findAllYoutube()
        const response = new BaseResponseApi<any>(true,'success',data,res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
            
        }
    }
}
