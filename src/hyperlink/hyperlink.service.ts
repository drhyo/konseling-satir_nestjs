import { Injectable, NotFoundException } from '@nestjs/common';
import { HyperlinkEntity } from './entity/hyperlink.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'

@Injectable()
export class HyperlinkService {
    constructor(
        @InjectRepository(HyperlinkEntity)
        private hyperlinkRepository: Repository<HyperlinkEntity>
    ){}

    async findData(): Promise<HyperlinkEntity[]> {
        return await this.hyperlinkRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get( process.env.STRAPI_URL + 'hyperlinks?populate=*')
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

   

    async findAllDataWithImage (): Promise<HyperlinkEntity[]> {
        const findAllPelatihanCard = await this.findData()
        const getImage = await this.getImage()

        const merge = findAllPelatihanCard.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
    
            return{
                ...item,
                image: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }

}
