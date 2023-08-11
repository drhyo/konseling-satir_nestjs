import { Module } from '@nestjs/common';
import { FooterContactUsController } from './footer-contact-us.controller';
import { FooterContactUsService } from './footer-contact-us.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooterContactUsEntity } from './entity/footer-contact-us.entity';

@Module({
  imports:[TypeOrmModule.forFeature([FooterContactUsEntity])],
  controllers: [FooterContactUsController],
  providers: [FooterContactUsService]
})
export class FooterContactUsModule {}
