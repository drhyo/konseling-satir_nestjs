import { Module } from '@nestjs/common';
import { GalleryHomeController } from './gallery-home.controller';
import { GalleryHomeService } from './gallery-home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleryHomeEntity } from './entity/gallery-home.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GalleryHomeEntity])],
  controllers: [GalleryHomeController],
  providers: [GalleryHomeService]
})
export class GalleryHomeModule {}
