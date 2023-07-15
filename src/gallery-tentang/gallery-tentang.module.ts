import { Module } from '@nestjs/common';
import { GalleryTentangController } from './gallery-tentang.controller';
import { GalleryTentangService } from './gallery-tentang.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleryTentangEntity } from './entity/gallery-tentang.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GalleryTentangEntity])],
  controllers: [GalleryTentangController],
  providers: [GalleryTentangService]
})
export class GalleryTentangModule {}
