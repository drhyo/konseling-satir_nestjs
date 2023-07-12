import { Module } from '@nestjs/common';
import { PelatihanCardController } from './pelatihan-card.controller';
import { PelatihanCardService } from './pelatihan-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelatihanCardEntity } from './entity/pelatihan-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PelatihanCardEntity])],
  controllers: [PelatihanCardController],
  providers: [PelatihanCardService]
})
export class PelatihanCardModule {}
