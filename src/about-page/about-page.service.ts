import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AboutPageEntity } from './entity/about-page.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'

@Injectable()
export class AboutPageService {
    constructor(
       @InjectRepository(AboutPageEntity)
       private aboutPageRepository: Repository<AboutPageEntity> 
    ){ }

    async findData(id: number) {
        return await this.aboutPageRepository.findOne({where:{id}})
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get( process.env.STRAPI_URL + 'about?populate=*')
            const findImage = res.data.data.attributes.image.data.attributes.url;
            const imageUrl = `http://localhoast:1337${ findImage }`
            return{
                    url: imageUrl
            }
        } catch (error) {
            console.log(error);
            throw new NotFoundException('failed')
        }
    }
    
    async findDataWithImage (id: number): Promise<AboutPageEntity> {
        const findData = await this.findData(id)
        const getImage = await this.getImage()

        const merge = () => {
            return {
                ...findData,
                ...getImage
            }
        }
       const data = merge();
       return data;



    }
}
