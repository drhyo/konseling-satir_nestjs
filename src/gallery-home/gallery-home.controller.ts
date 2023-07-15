import { Controller, Get, Res } from '@nestjs/common';
import { BaseResponseApi } from 'src/response/response';
import { GalleryHomeService } from './gallery-home.service';
import { Response } from 'express';

@Controller('gallery-home')
export class GalleryHomeController {
    constructor(private galleryHomeService: GalleryHomeService) 
    { }

    @Get()
    async findAllBanner(@Res() res: Response) {
        try {
        const data = await this.galleryHomeService.findAllGalleryWithImage()
        const response = new BaseResponseApi<any>(true,'success',data,res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
            
        }
    }
}
