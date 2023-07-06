import { Controller, Get, Res } from '@nestjs/common';
import { FounderCardService } from './founder-card.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('founder-card')
export class FounderCardController {
    constructor(private founderCardService: FounderCardService)
    { }
    

    @Get()
    async findAllFounderCards (@Res() res: Response): Promise<any> {
        try {
            const dataFounderCard = await this.founderCardService.findAllFounderCardWithImage()
            const response = new BaseResponseApi<any>(true,'success',dataFounderCard,res)
            return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found',error,res)
            return response.responDataNotFound()
            
        }
    }
}
