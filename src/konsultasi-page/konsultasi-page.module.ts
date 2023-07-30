import { Module } from '@nestjs/common';
import { KonsultasiPageController } from './konsultasi-page.controller';
import { KonsultasiPageService } from './konsultasi-page.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KonsultasiPageEntity } from './entity/konsultasi-page.entity';

@Module({
  imports:[TypeOrmModule.forFeature([KonsultasiPageEntity])],
  controllers: [KonsultasiPageController],
  providers: [KonsultasiPageService]
})
export class KonsultasiPageModule {}
