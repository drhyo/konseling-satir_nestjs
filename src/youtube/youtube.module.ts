import { Module } from '@nestjs/common';
import { YoutubeController } from './youtube.controller';
import { YoutubeService } from './youtube.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { YoutubeEntity } from './entity/youtube.entity';

@Module({
  imports: [TypeOrmModule.forFeature([YoutubeEntity])],
  controllers: [YoutubeController],
  providers: [YoutubeService]
})
export class YoutubeModule {}
