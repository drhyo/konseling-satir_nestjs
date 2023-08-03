import { Controller, Get, Query, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService)
    { }

    @Get()
    async getData (
        @Query('category') category: string,
        @Res() res: Response
    ): Promise<any> {
        try {
        const data = await this.productsService.findAllArticelCardWithImage(category)
        const response = new BaseResponseApi<any>(true,'success',data,res)
        return response.responseSucces()   
        } catch (e) {
            console.log(e);
            const response = new BaseResponseApi<any>(false,'failed',e,res)
            return response.responDataNotFound()  
        }
    }
}
