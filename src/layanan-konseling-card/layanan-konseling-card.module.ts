import { Module } from '@nestjs/common';
import { LayananKonselingCardController } from './layanan-konseling-card.controller';
import { LayananKonselingCardService } from './layanan-konseling-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LayananKonselingCardEntity } from './entity/layanan-konseling-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LayananKonselingCardEntity])],
  controllers: [LayananKonselingCardController],
  providers: [LayananKonselingCardService]
})
export class LayananKonselingCardModule {}
