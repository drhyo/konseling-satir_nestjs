import { Controller, Get, Res } from '@nestjs/common';
import { LayananKonselingCardService } from './layanan-konseling-card.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('layanan-konseling-card')
export class LayananKonselingCardController {
    constructor(private layananKonselingCardService: LayananKonselingCardService)
    { }

    @Get()
    async  findAllLayananKonelingCard(@Res() res: Response): Promise<any> {
        try {
        const dataLayanan = this.layananKonselingCardService.findAllLayananKonselingCardWithImage()
        const response = new BaseResponseApi<any>(true,'success',dataLayanan,res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
            
        }
    }
}
