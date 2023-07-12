import { Controller, Get, Param, Res } from '@nestjs/common';
import { PelatihanCardService } from './pelatihan-card.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('pelatihan-card')
export class PelatihanCardController {
    constructor(private pelatihanCardService: PelatihanCardService)
    {   }

    @Get()
    async findAllPelatihanCard(@Res() res: Response): Promise<any>{
        try {
        const dataPelatihanCard = await this.pelatihanCardService.findAllPelatihanCardWithImage()
        const response = new BaseResponseApi<any>(true,'success',dataPelatihanCard,res)
        return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found', error, res)
        return response.responDataNotFound()
            
        }
    }


    @Get(':id')
    async findById(@Param('id') id: number ){
        return await this.pelatihanCardService.findDataById({id: id})
    }
}
