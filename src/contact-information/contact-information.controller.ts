import { Controller, Get, Res } from '@nestjs/common';
import { ContactInformationService } from './contact-information.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('contact-information')
export class ContactInformationController {
    constructor(private contactInformationService: ContactInformationService)
    { }

    @Get()
    async findData(@Res() res: Response): Promise<any> {
        try {
            const data = await this.contactInformationService.findData()
            const response = new BaseResponseApi<any> (true,'success',data,res)
            return response.responseSucces()
            } catch (error) {
            const response = new BaseResponseApi<any> (false,'failed',error,res)
            return response.responDataNotFound()
            }
    }
}
