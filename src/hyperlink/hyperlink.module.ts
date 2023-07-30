import { Module } from '@nestjs/common';
import { HyperlinkController } from './hyperlink.controller';
import { HyperlinkService } from './hyperlink.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HyperlinkEntity } from './entity/hyperlink.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HyperlinkEntity])],
  controllers: [HyperlinkController],
  providers: [HyperlinkService]
})
export class HyperlinkModule {}
