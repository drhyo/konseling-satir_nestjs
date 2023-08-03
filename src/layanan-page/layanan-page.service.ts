import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LayananPageEntity } from './entity/layanan-page.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'

@Injectable()
export class LayananPageService {
    constructor(
        @InjectRepository(LayananPageEntity)
        private layananPageRepository: Repository<LayananPageEntity>
    ){ }
    
        async findData(id: number) {
            return await this.layananPageRepository.findOne({where:{id}})
        }
    
        async getImage (): Promise<any> {
            try {
                const res = await axios.get(process.env.STRAPI_URL + 'layanan?populate=*')
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
        
        async findDataWithImage (id: number): Promise<LayananPageEntity> {
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
