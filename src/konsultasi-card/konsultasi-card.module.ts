import { Module } from '@nestjs/common';
import { KonsultasiCardController } from './konsultasi-card.controller';
import { KonsultasiCardService } from './konsultasi-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KonsultasiCardEntity } from './entity/konsultasi-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KonsultasiCardEntity])],
  controllers: [KonsultasiCardController],
  providers: [KonsultasiCardService]
})
export class KonsultasiCardModule {}
