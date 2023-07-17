import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity) 
        private productRepository: Repository<ProductEntity>
        ) { }

        async findAllProducts (): Promise<ProductEntity[]> {
            return await this.productRepository.find()
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

        async findAllProductsWithImage (): Promise<ProductEntity[]> {
            const findAllProducts = await this.findAllProducts()
            const getImage = await this.getImage()

            const merge = findAllProducts.map((item) => {
                const image = getImage.find((img: any ) => img.id == item.id)
                return{
                    ...item,
                    image: image ? `http://localhost:1337${ image.url }`: '' 
                }
            })
            return merge
        }
}
