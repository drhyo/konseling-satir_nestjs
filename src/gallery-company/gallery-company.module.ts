import { Module } from '@nestjs/common';
import { GalleryCompanyController } from './gallery-company.controller';
import { GalleryCompanyService } from './gallery-company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyEntity } from './entity/gallery-company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyEntity])],
  controllers: [GalleryCompanyController],
  providers: [GalleryCompanyService]
})
export class GalleryCompanyModule {}
