import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './entity/question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(QuestionEntity)
        private questionRepository: Repository<QuestionEntity>
    ){ }

    async findAllData():Promise<QuestionEntity[]> {
        return await this.questionRepository.find()
    }
}