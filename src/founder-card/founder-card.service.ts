import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FounderCardEntity } from './entity/founder-card.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class FounderCardService {
    constructor(
        @InjectRepository(FounderCardEntity)
        private founderCardRepository: Repository<FounderCardEntity>
        ){ }

        async findAllFounderCard (): Promise<FounderCardEntity[]> {
            return this.founderCardRepository.find()
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
    
        async findAllFounderCardWithImage (): Promise<FounderCardEntity[]> {
            const findAllFounderCard = await this.findAllFounderCard()
            const getImage = await this.getImage()
    
            const merge = findAllFounderCard.map((item) => {
                const image = getImage.find((img: any ) => img.id == item.id)
                return{
                    ...item,
                    image_founder: image ? `http://localhost:1337${ image.url }`: '' 
                }
            })
            return merge
        }
}
