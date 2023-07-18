import { Controller, Get, Res } from '@nestjs/common';
import { LayananCardService } from './layanan-card.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('layanan-card')
export class LayananCardController {
    constructor( private layananCardService: LayananCardService )
    { }

    @Get()
        async findData (@Res() res: Response): Promise<any> {
        try {
            const dataProducts = await this.layananCardService.findAllDataWithImage()
            const response = new BaseResponseApi<any>(true,"success",dataProducts,res)
            return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found',error,res)
            return response.responDataNotFound()
        }
    }
}
