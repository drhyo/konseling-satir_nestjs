import { Controller, Get, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('product')
export class ProductController {
    constructor(private productservice: ProductService){}



    @Get()
    async findProductsAll (@Res() res: Response): Promise<any> {
        try {
            const dataProducts = await this.productservice.findAllProductWithImage()
            const response = new BaseResponseApi<any>(true,"success",dataProducts,res)
            return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found',error,res)
            return response.responDataNotFound()
        }

    }


}
