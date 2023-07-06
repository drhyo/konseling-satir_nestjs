import { Module } from '@nestjs/common';
import { ArticelCardController } from './articel-card.controller';
import { ArticelCardService } from './articel-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticelCardEntity } from './entity/articel-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticelCardEntity])],
  controllers: [ArticelCardController],
  providers: [ArticelCardService]
})
export class ArticelCardModule {}
