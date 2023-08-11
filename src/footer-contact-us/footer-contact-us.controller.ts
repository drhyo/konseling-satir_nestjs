import { Controller, Get, Res } from '@nestjs/common';
import { FooterContactUsService } from './footer-contact-us.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('footer-contact-us')
export class FooterContactUsController {
    constructor(private footerContactUsService: FooterContactUsService)
    { }
    
    @Get()
    async findData (@Res() res: Response) {
        try {
        const data = await this.footerContactUsService.findData()
        const response = new BaseResponseApi<any> (true,'success',data,res)
        return response.responseSucces()
        } catch (error) {
        const response = new BaseResponseApi<any> (true,'success',error,res)
        return response.responDataNotFound()
        }
    }
}
