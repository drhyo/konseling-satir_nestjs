import { Module } from '@nestjs/common';
import { HomePageController } from './home-page.controller';
import { HomePageService } from './home-page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomePageEntity } from './entity/home-page.entity';

@Module({
  imports:[TypeOrmModule.forFeature([HomePageEntity])],
  controllers: [HomePageController],
  providers: [HomePageService]
})
export class HomePageModule {}
