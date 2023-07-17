import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KonsultasiCardEntity } from './entity/konsultasi-card.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class KonsultasiCardService {
    constructor(
        @InjectRepository(KonsultasiCardEntity)
        private konsultasiCardRepository: Repository<KonsultasiCardEntity>
    ){}


    async findAllKonsultasiCard(): Promise<KonsultasiCardEntity[]> {
        return await this.konsultasiCardRepository.find()
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

    async findAllKonsultasiCardWithImage (): Promise<KonsultasiCardEntity[]> {
        const findAllKonsultasiCard = await this.findAllKonsultasiCard()
        const getImage = await this.getImage()

        const merge = findAllKonsultasiCard.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }


}
