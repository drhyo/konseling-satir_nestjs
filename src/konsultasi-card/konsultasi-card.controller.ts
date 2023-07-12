import { Controller, Get, Res } from '@nestjs/common';
import { KonsultasiCardService } from './konsultasi-card.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';
import { log } from 'console';

@Controller('konsultasi-card')
export class KonsultasiCardController {
    constructor(private konsultasiCardService: KonsultasiCardService)
    { }

    @Get()
    async findAllkonsultasiCard(@Res() res: Response): Promise<any>{
        try {
        const dataKonsultasi = await this.konsultasiCardService.findAllKonsultasiCardWithImage()
        const response = new BaseResponseApi<any>(true,'success',dataKonsultasi,res)
        return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
        }
    }

}
