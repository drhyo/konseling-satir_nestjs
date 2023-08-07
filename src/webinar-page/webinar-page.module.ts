import { Module } from '@nestjs/common';
import { WebinarPageController } from './webinar-page.controller';
import { WebinarPageService } from './webinar-page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebinarPageEntity } from './entity/webinar-page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WebinarPageEntity])],
  controllers: [WebinarPageController],
  providers: [WebinarPageService]
})
export class WebinarPageModule { }
