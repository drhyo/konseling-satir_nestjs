import { Module } from '@nestjs/common';
import { ContactInformationController } from './contact-information.controller';
import { ContactInformationService } from './contact-information.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInformationEntity } from './entity/contact-information.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ContactInformationEntity])],
  controllers: [ContactInformationController],
  providers: [ContactInformationService]
})
export class ContactInformationModule {}
