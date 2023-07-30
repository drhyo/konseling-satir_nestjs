import { Module } from '@nestjs/common';
import { AboutPageController } from './about-page.controller';
import { AboutPageService } from './about-page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AboutPageEntity } from './entity/about-page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AboutPageEntity])],
  controllers: [AboutPageController],
  providers: [AboutPageService]
})
export class AboutPageModule {}
