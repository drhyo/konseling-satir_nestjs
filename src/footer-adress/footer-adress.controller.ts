import { Controller, Get, Res } from '@nestjs/common';
import { FooterAdressService } from './footer-adress.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('footer-adress')
export class FooterAdressController {
    constructor(private footerAdressService: FooterAdressService)
    {}

    @Get()
    async findData (@Res() res: Response): Promise<any> {
        try {
            const data = await this.footerAdressService.findData()
            const response = new BaseResponseApi<any> (true,'success',data,res)
            return response.responseSucces()
        } catch (error) {
            const response = new BaseResponseApi<any> (false,'failed',error,res)
            response.responDataNotFound()
        }
    }
}
