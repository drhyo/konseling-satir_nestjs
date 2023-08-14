import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactInformationEntity } from './entity/contact-information.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactInformationService {
    constructor(
        @InjectRepository(ContactInformationEntity)
        private contactInformationRepository: Repository<ContactInformationEntity>
    ){}

   async findData(): Promise<ContactInformationEntity[]> {
        return await this.contactInformationRepository.find()
    }
}
