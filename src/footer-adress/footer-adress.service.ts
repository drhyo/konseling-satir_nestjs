import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdressEntity } from './entity/footer-adress.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FooterAdressService {
    constructor(
        @InjectRepository(AdressEntity)
        private adressRepository: Repository<AdressEntity>
    ) { }


    async findData(): Promise<AdressEntity[]> {
        return await this.adressRepository.find()
    }
}
