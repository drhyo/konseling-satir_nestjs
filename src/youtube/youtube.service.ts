import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { YoutubeEntity } from './entity/youtube.entity';
import { Repository } from 'typeorm';

@Injectable()
export class YoutubeService {
    constructor(@InjectRepository(YoutubeEntity)
    private youtubeRepository : Repository<YoutubeEntity>)
    { }

    async findAllYoutube(): Promise<YoutubeEntity[]> {
        return await this.youtubeRepository.find()
    }

}
