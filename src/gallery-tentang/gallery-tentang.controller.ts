import { Controller, Get, Res } from '@nestjs/common';
import { GalleryTentangService } from './gallery-tentang.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';

@Controller('gallery-tentang')
export class GalleryTentangController { 
    constructor(private galleryTentangService: GalleryTentangService) 
    { }

    @Get()
    async findAllBanner(@Res() res: Response) {
        try {
        const data = await this.galleryTentangService.findAllGalleryWithImage()
        const response = new BaseResponseApi<any>(true,'success',data,res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'failed',error,res)
            return response.responDataNotFound()
            
        }
    }
}
