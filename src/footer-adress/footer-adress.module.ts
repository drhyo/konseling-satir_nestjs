import { Module } from '@nestjs/common';
import { FooterAdressController } from './footer-adress.controller';
import { FooterAdressService } from './footer-adress.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdressEntity } from './entity/footer-adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdressEntity])],
  controllers: [FooterAdressController],
  providers: [FooterAdressService]
})
export class FooterAdressModule { }
