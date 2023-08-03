import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelatihanPageEntity } from './entity/pelatihan-page.entity';
import axios from 'axios';
import 'dotenv/config'
@Injectable()
export class PelatihanPageService {
    constructor(
        @InjectRepository(PelatihanPageEntity)
        private pelatihanPageRepository: Repository<PelatihanPageEntity>
    ){ }
    
        async findData(id: number) {
            return await this.pelatihanPageRepository.findOne({where:{id}})
        }
    
        async getImage (): Promise<any> {
            try {
                const res = await axios.get(process.env.STRAPI_URL + 'pelatihan?populate=*')
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
        
        async findDataWithImage (id: number): Promise<PelatihanPageEntity> {
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
