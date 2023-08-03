import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SliderSectionInfoEntity } from './entity/slider-section-info.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import 'dotenv/config'
@Injectable()
export class SliderSectionInfoService {
    constructor(
        @InjectRepository(SliderSectionInfoEntity)
        private sliderSectionInfoRepository: Repository<SliderSectionInfoEntity>
    ){ }


    async findSliderSectionInfo ():Promise<SliderSectionInfoEntity[]> {
        return await this.sliderSectionInfoRepository.find()
    }

    async getImage (): Promise<any> {
        try {
            const res = await axios.get(process.env.STRAPI_URL + 'slider-section-infos?populate=*')
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

    async findAllSliderSectionInfoWithImage (): Promise<SliderSectionInfoEntity[]> {
        const findSliderSectionInfo = await this.findSliderSectionInfo()
        const getImage = await this.getImage()

        const merge = findSliderSectionInfo.map((item) => {
            const image = getImage.find((img: any ) => img.id == item.id)
            return{
                ...item,
                image_slider: image ? `http://localhost:1337${ image.url }`: '' 
            }
        })
        return merge
    }


}