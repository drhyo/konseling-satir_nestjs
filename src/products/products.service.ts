import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './entity/product.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductsEntity)
        private productsRepository: Repository<ProductsEntity>
    ){}

    findAllData(category: string): Promise<ProductsEntity[]> {
        return this.productsRepository.find({
            where: {
                category: category
            }
            
        })
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get( process.env.STRAPI_URL + 'products?populate=*')
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

    async findAllArticelCardWithImage (category: string): Promise<ProductsEntity[]> {
        const findAllData = await this.findAllData(category)
        const getImage = await this.getImage()

        const merge = findAllData.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image_articel: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        let artikelReverse = merge.reduce((acc, curr) => [curr, ...acc], []);
        return artikelReverse;

    }

}
