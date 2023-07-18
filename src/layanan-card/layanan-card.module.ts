import { Module } from '@nestjs/common';
import { LayananCardController } from './layanan-card.controller';
import { LayananCardService } from './layanan-card.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LayananCardEntity } from './entity/layanan-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LayananCardEntity])],
  controllers: [LayananCardController],
  providers: [LayananCardService]
})
export class LayananCardModule {}
