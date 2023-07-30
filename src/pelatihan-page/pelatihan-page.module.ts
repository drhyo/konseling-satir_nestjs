import { Module } from '@nestjs/common';
import { PelatihanPageController } from './pelatihan-page.controller';
import { PelatihanPageService } from './pelatihan-page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelatihanPageEntity } from './entity/pelatihan-page.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PelatihanPageEntity])],
  controllers: [PelatihanPageController],
  providers: [PelatihanPageService]
})
export class PelatihanPageModule {}
