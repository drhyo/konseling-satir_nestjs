import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FooterContactUsEntity } from './entity/footer-contact-us.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FooterContactUsService {
    constructor(
        @InjectRepository(FooterContactUsEntity)
        private footerContactUsRepository: Repository<FooterContactUsEntity>
    ){}

    async findData (): Promise<FooterContactUsEntity[]> {
        return await this.footerContactUsRepository.find()
    }
}
