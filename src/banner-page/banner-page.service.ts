import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerPageEntity } from './entity/banner-page.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config';
@Injectable()
export class BannerPageService {
    constructor(
        @InjectRepository(BannerPageEntity)
        private bannerPageRepository: Repository<BannerPageEntity>
    )
    { }


    async findAllBanner (): Promise<BannerPageEntity[]> {
        return await this.bannerPageRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get(process.env.STRAPI_URL + '/banner-pages?populate=*')
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

    async findAllBannerWithImage (): Promise<BannerPageEntity[]> {
        const findAllBanner = await this.findAllBanner()
        const getImage = await this.getImage()

        const merge = findAllBanner.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }

}
