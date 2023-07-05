import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './entity/blog.entity';
import { Repository } from 'typeorm';
import { BaseResponseApi } from 'src/response/response';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private blogRepository: Repository<BlogEntity>
    ) { }

    async findAllBlog (): Promise<BlogEntity[]>{
        const dataBlog = await this.blogRepository.find()
        return dataBlog

    }


}
