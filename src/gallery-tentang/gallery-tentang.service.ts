import { Injectable, NotFoundException } from '@nestjs/common';
import { GalleryTentangEntity } from './entity/gallery-tentang.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'
@Injectable()
export class GalleryTentangService {
    constructor(
        @InjectRepository(GalleryTentangEntity)
        private galleryHomeRepository: Repository<GalleryTentangEntity>
    )
    { }

    async findAllGallery(): Promise<GalleryTentangEntity[]> {
        return await this.galleryHomeRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get( process.env.STRAPI_URL + 'gallery-tentang-konselings?populate=*')
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

    async findAllGalleryWithImage (): Promise<GalleryTentangEntity[]> {
        const findAllGallery = await this.findAllGallery()
        const getImage = await this.getImage()

        const merge = findAllGallery.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }
}
