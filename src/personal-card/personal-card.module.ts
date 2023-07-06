import { Module } from '@nestjs/common';
import { PersonalCardController } from './personal-card.controller';
import { PersonalCardService } from './personal-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalCardEntity } from './entity/personal-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalCardEntity])],
  controllers: [PersonalCardController],
  providers: [PersonalCardService]
})
export class PersonalCardModule {}
