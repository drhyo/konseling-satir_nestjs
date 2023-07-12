import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// import module
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { ArticelCardModule } from './articel-card/articel-card.module';
import { SliderSectionInfoModule } from './slider-section-info/slider-section-info.module';
import { FounderCardModule } from './founder-card/founder-card.module';
import { PersonalCardModule } from './personal-card/personal-card.module';
import { BlogModule } from './blog/blog.module';
import { PelatihanCardModule } from './pelatihan-card/pelatihan-card.module';
import { KonsultasiCardModule } from './konsultasi-card/konsultasi-card.module';
import { LayananKonselingCardModule } from './layanan-konseling-card/layanan-konseling-card.module';

//import entity
import { UserEntity } from './user/entity/user.entity';
import { ProductEntity } from './product/entity/product.entity';
import { ArticelCardEntity } from './articel-card/entity/articel-card.entity';
import { SliderSectionInfoEntity } from './slider-section-info/entity/slider-section-info.entity';
import { FounderCardEntity } from './founder-card/entity/founder-card.entity';
import { PersonalCardEntity } from './personal-card/entity/personal-card.entity';
import { BlogEntity } from './blog/entity/blog.entity';
import { PelatihanCardEntity } from './pelatihan-card/entity/pelatihan-card.entity';
import { KonsultasiCardEntity } from './konsultasi-card/entity/konsultasi-card.entity';
import { LayananKonselingCardEntity } from './layanan-konseling-card/entity/layanan-konseling-card.entity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'konseling_satir',
    entities: [
      UserEntity, 
      ProductEntity, 
      ArticelCardEntity, 
      SliderSectionInfoEntity,
      FounderCardEntity,
      PersonalCardEntity,
      BlogEntity,
      PelatihanCardEntity,
      KonsultasiCardEntity,
      LayananKonselingCardEntity
    ],
    synchronize: false,
  }), UserModule, 
      ProductModule, 
      ArticelCardModule, 
      SliderSectionInfoModule, 
      FounderCardModule, 
      PersonalCardModule, 
      BlogModule, 
      PelatihanCardModule,
      KonsultasiCardModule,
      LayananKonselingCardModule   
      ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
