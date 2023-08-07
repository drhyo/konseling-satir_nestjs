import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WebinarPageEntity } from './entity/webinar-page.entity';
import axios from 'axios';
import 'dotenv/config'


@Injectable()
export class WebinarPageService {
    constructor(
        @InjectRepository(WebinarPageEntity)
        private webinarPageRepository: Repository<WebinarPageEntity>
    ) { }

    async findData(id: number) {
        return await this.webinarPageRepository.findOne({ where: { id } })
    }

    async getImage(): Promise<any> {
        try {
            const res = await axios.get(process.env.STRAPI_URL + 'webinar?populate=*')
            const findImage = res.data.data.attributes.image.data.attributes.url;
            const imageUrl = `http://localhost:1337${findImage}`
            return {
                url: imageUrl
            }
        } catch (error) {
            console.log(error);
            throw new NotFoundException('failed')
        }
    }

    async findDataWithImage(id: number): Promise<WebinarPageEntity> {
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
