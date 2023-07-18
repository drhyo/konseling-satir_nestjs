import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LayananCardEntity } from './entity/layanan-card.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class LayananCardService {
    constructor(
        @InjectRepository(LayananCardEntity)
        private layananCardRepository: Repository<LayananCardEntity>
    ){ }

    async findAllData (): Promise<LayananCardEntity[]> {
        return await this.layananCardRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get('http://localhost:1337/api/product-cards?populate=*')
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

    async findAllDataWithImage (): Promise<LayananCardEntity[]> {
        const findAllData = await this.findAllData()
        const getImage = await this.getImage()

        const merge = findAllData.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }

}
