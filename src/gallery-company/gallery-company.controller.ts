import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';
import { GalleryCompanyService } from './gallery-company.service';

@Controller('gallery-company')
export class GalleryCompanyController {
        constructor(private galleryCompanyService: GalleryCompanyService) 
        { }

    @Get()
    async findAllBanner(@Res() res: Response) {
        try {
        const data = await this.galleryCompanyService.findAllGalleryWithImage()
        const response = new BaseResponseApi<any>(true,'success',data,res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
            
        }
    }
}
