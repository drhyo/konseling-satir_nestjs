import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './entity/blog.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private blogRepository: Repository<BlogEntity>
    ){ }

    async findAllBlog (): Promise<BlogEntity[]> {
        return await this.blogRepository.find()
    }
    
    async getImage (): Promise<any> {
        try {
            const res = await axios.get('http://localhost:1337/api/founder-cards?populate=*')
            const findImage = res.data.data.map((image: any) => {
                const imageUrl = image.attributes.image.data.attributes.url
                return{
                    id: image.id,
                    url: imageUrl
                }
            })
            return findImage
        } catch (error) {
            console.log(error);
            throw new NotFoundException('failed')
        }
    }

    async findAllBlogWithImage (): Promise<BlogEntity[]> {
        const findAllFounderCard = await this.findAllBlog()
        const getImage = await this.getImage()

        const merge = findAllFounderCard.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image_blog: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }
}
