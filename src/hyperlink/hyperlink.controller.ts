import { Controller, Get, Res } from '@nestjs/common';
import { HyperlinkService } from './hyperlink.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('hyperlink')
export class HyperlinkController {
    constructor(private hyperlinkServive: HyperlinkService)
    { }

    @Get()
    async findData(@Res() res: Response): Promise<any> {
        try {
        const data = await this.hyperlinkServive.findAllDataWithImage()
        const response = new BaseResponseApi<any> (true,'success',data, res)
        return response.responseSucces()    
        } catch (error) {
            const response = new BaseResponseApi<any> (false,'failed',error, res)
            response.responDataNotFound()
        }
    }
}
