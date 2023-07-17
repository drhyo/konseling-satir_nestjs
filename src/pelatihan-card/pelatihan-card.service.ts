import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelatihanCardEntity } from './entity/pelatihan-card.entity';
import axios from 'axios';

@Injectable()
export class PelatihanCardService {
    constructor(
        @InjectRepository(PelatihanCardEntity)
        private pelatihanCardRepository: Repository<PelatihanCardEntity>
    ){ }

    async findAllPelatihanCard(): Promise<PelatihanCardEntity[]> {
        return await this.pelatihanCardRepository.find( )

    }


    async findDataById({id: id}) {
        return await this.pelatihanCardRepository.findOne({
            where: {id}
        })
    }


    
    async getImage (): Promise<any> {
        try {
            const res = await axios.get('http://localhost:1337/api/card-pelatihans?populate=*')
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

   

    async findAllPelatihanCardWithImage (): Promise<PelatihanCardEntity[]> {
        const findAllPelatihanCard = await this.findAllPelatihanCard()
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
