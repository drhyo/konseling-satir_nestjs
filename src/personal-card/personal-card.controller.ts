 import { Controller, Get, Res } from '@nestjs/common';
import { PersonalCardService } from './personal-card.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('personal-card')
export class PersonalCardController {
    constructor(private personalCardService: PersonalCardService)
    { }

    @Get()
    async findAllPersonalCards(@Res() res: Response):Promise<any> {
        try {
        const dataPersonalCard = await this.personalCardService.findAllPersonalCardWithImage()
        const response = new BaseResponseApi<any>(true,'success',dataPersonalCard,res)
        return response.responseSucces()
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'success',error,res)
            return response.responDataNotFound()
            
        }
    }
}
