import { Controller, Get, Res } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BaseResponseApi } from 'src/response/response';
import { Response } from 'express';
import { BlogEntity } from './entity/blog.entity';

@Controller('blog')
export class BlogController {
    constructor(private blogServise: BlogService)
    {  }

    @Get()
    async findAllBlog(): Promise<BlogEntity[]>{
        return await this.blogServise.findAllBlog()
    }
}