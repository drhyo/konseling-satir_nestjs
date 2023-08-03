import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GalleryHomeEntity } from './entity/gallery-home.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'
@Injectable()
export class GalleryHomeService {
    constructor(
        @InjectRepository(GalleryHomeEntity)
        private galleryHomeRepository: Repository<GalleryHomeEntity>
    )
    { }

    async findAllGallery(): Promise<GalleryHomeEntity[]> {
        return await this.galleryHomeRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get( process.env.STRAPI_URL + 'gallery-banner-homepages?populate=*')
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

    async findAllGalleryWithImage (): Promise<GalleryHomeEntity[]> {
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
