import { Controller, Get, Res } from '@nestjs/common';
import { SliderSectionInfoService } from './slider-section-info.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('slider-section-info')
export class SliderSectionInfoController {
    constructor(private sliderSectioninfoService: SliderSectionInfoService )
    {  }

    @Get()
    async findData( @Res() res: Response): Promise<any> {
        try {
            const data = await this.sliderSectioninfoService.findAllSliderSectionInfoWithImage()
            const response = new BaseResponseApi<any>(true,'success',data,res)
            return response.responseSucces()    
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found',error,res)
            return response.responDataNotFound()
        }
    }
}
