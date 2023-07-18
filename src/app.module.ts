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
import { PelatihanCardModule } from './pelatihan-card/pelatihan-card.module';
import { KonsultasiCardModule } from './konsultasi-card/konsultasi-card.module';
// import { LayananKonselingCardModule } from './layanan-konseling-card/layanan-konseling-card.module';
import { BannerPageModule } from './banner-page/banner-page.module';
import { GalleryHomeModule } from './gallery-home/gallery-home.module';
import { GalleryTentangModule } from './gallery-tentang/gallery-tentang.module';
import { QuestionModule } from './question/question.module';
import { LayananCardModule } from './layanan-card/layanan-card.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'konseling_satir',
    autoLoadEntities: true,
    synchronize: false,
  }), UserModule, 
      ProductModule, 
      ArticelCardModule, 
      SliderSectionInfoModule, 
      FounderCardModule, 
      PersonalCardModule, 
      PelatihanCardModule,
      KonsultasiCardModule,
      // LayananKonselingCardModule,
      BannerPageModule,
      GalleryHomeModule,
      GalleryTentangModule,
      QuestionModule,
      LayananCardModule,
      ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
