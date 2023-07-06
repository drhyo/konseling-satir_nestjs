import { Controller, Get, Res } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Response } from 'express';
import { BaseResponseApi } from 'src/response/response';

@Controller('blog')
export class BlogController {
    constructor(private blogservice: BlogService)
    { }

    @Get()
    async findAllBlog(@Res() res: Response): Promise<any> {
        try {
        const dataBlog = await this.blogservice.findAllBlogWithImage()
        const response = new BaseResponseApi<any>(true,'success',dataBlog, res)
        return response.responseSucces()
            
        } catch (error) {
            console.log(error);
            const response = new BaseResponseApi<any>(false,'Not Found',error,res)
            return response.responDataNotFound()
        }
    }
}
