import { Module } from '@nestjs/common';
import { LayananPageController } from './layanan-page.controller';
import { LayananPageService } from './layanan-page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LayananPageEntity } from './entity/layanan-page.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LayananPageEntity])],
  controllers: [LayananPageController],
  providers: [LayananPageService]
})
export class LayananPageModule {}
