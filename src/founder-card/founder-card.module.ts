import { Module } from '@nestjs/common';
import { FounderCardController } from './founder-card.controller';
import { FounderCardService } from './founder-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FounderCardEntity } from './entity/founder-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FounderCardEntity])],
  controllers: [FounderCardController],
  providers: [FounderCardService]
})
export class FounderCardModule {}