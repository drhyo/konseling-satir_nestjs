import { Controller, Get, Param, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('product')
export class ProductController {
    constructor(private productservice: ProductService){}



    @Get()
    async findProductsAll (@Res() res: Response): Promise<any> {
        try {
            const dataProducts = await this.productservice.findAllProductsWithImage()
            const response = new BaseResponseApi<any>(true,"success",dataProducts,res)
            return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found',error,res)
            return response.responDataNotFound()
        }

    }

    // @Get(':id')
    // async getProductById(@Param('id') id: number, @Res() res: Response ){
    //     try {
    //         return await this.productservice.findProductById(id)
    //     } catch (error) {
    //         console.log(error);
    //         const response = new BaseResponseApi<any>(false,'Not Found',error,res) 
    //         return response.responDataNotFound()
            
    //     }
    // }

}
