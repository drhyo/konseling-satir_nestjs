import { Module } from '@nestjs/common';
import { SliderSectionInfoService } from './slider-section-info.service';
import { SliderSectionInfoController } from './slider-section-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SliderSectionInfoEntity } from './entity/slider-section-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SliderSectionInfoEntity])],
  controllers:[SliderSectionInfoController],
  providers: [SliderSectionInfoService]
})
export class SliderSectionInfoModule {}
