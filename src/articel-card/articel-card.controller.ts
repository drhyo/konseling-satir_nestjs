import { Controller, Get, Res } from '@nestjs/common';
import { ArticelCardService } from './articel-card.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('articel-card')
export class ArticelCardController {
    constructor( private articelCardService: ArticelCardService)
    { }

    @Get()
    async findAllArticelCard (@Res() res: Response) {
        try {
            const dataArticel = await this.articelCardService.findAllArticelCardWithImage()
            const response = new BaseResponseApi<any>(true,"success", dataArticel,res)
            return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,"Not Found", error,res)
            return response.responDataNotFound()
        }
    }

    @Get('/populate')
    async findAllByPopulate (@Res() res: Response) {
        try {
            const dataArticel = await this.articelCardService.findAllArticelByPolulate()
            const response = new BaseResponseApi<any>(true,"success",dataArticel,res)
            return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,"Not Found",error,res)
            return response.responDataNotFound()
        }
    }
}
