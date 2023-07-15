import { Module } from '@nestjs/common';
import { BannerPageController } from './banner-page.controller';
import { BannerPageService } from './banner-page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerPageEntity } from './entity/banner-page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BannerPageEntity])],
  controllers: [BannerPageController],
  providers: [BannerPageService]
})
export class BannerPageModule {}
