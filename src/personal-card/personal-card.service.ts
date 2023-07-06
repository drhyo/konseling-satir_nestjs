import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalCardEntity } from './entity/personal-card.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class PersonalCardService {
    constructor(
        @InjectRepository(PersonalCardEntity)
        private personalCardRepository: Repository<PersonalCardEntity>
    ){ }

    async findAllPersonalCard(): Promise<PersonalCardEntity[]> {
        return await this.personalCardRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get('http://localhost:1337/api/personal-cards?populate=*')
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

    async findAllPersonalCardWithImage (): Promise<PersonalCardEntity[]> {
        const findAllPersonalCard = await this.findAllPersonalCard()
        const getImage = await this.getImage()

        const merge = findAllPersonalCard.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image_personal: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }
}
