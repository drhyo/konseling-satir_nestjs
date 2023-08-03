import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticelCardEntity } from './entity/articel-card.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'
@Injectable()
export class ArticelCardService {
    constructor(
        @InjectRepository(ArticelCardEntity)
        private articelCardRepository: Repository<ArticelCardEntity>
    ) {}

    async findAllArticelCard (): Promise<ArticelCardEntity[]> {
        return await this.articelCardRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get(process.env.STRAPI_URL + 'articel-cards?populate=*')
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

    async findAllArticelCardWithImage (): Promise<ArticelCardEntity[]> {
        const findAllArticelCard = await this.findAllArticelCard()
        const getImage = await this.getImage()

        const merge = findAllArticelCard.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image_articel: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        let artikelReverse = merge.reduce((acc, curr) => [curr, ...acc], []);
        return artikelReverse;

    }

//by populate
    async getImageByPopulate (): Promise<any> {
        try {
            const res = await axios.get( process.env.STRAPI_URL + 'articel-cards?populate=*&sort[0]=eye:desc')
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


    async findAllArticelByPolulate(): Promise<ArticelCardEntity[]> {
        const findAllArticelCard = await this.findAllArticelCard()
        const getImageByPopulate = await this.getImageByPopulate()
        
        const merge = findAllArticelCard.map((item) => {
            const image = getImageByPopulate.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image_articel: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }
    
}
