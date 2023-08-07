import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

// import module
import { UserModule } from './user/user.module';
import { ArticelCardModule } from './articel-card/articel-card.module';
import { SliderSectionInfoModule } from './slider-section-info/slider-section-info.module';
import { FounderCardModule } from './founder-card/founder-card.module';
import { PersonalCardModule } from './personal-card/personal-card.module';
import { BannerPageModule } from './banner-page/banner-page.module';
import { GalleryHomeModule } from './gallery-home/gallery-home.module';
import { GalleryTentangModule } from './gallery-tentang/gallery-tentang.module';
import { QuestionModule } from './question/question.module';
import { GalleryCompanyModule } from './gallery-company/gallery-company.module';
import { YoutubeModule } from './youtube/youtube.module';
import { HomePageModule } from './home-page/home-page.module';
import { WebinarPageModule } from './webinar-page/webinar-page.module';
import { AboutPageModule } from './about-page/about-page.module';
import { PelatihanPageModule } from './pelatihan-page/pelatihan-page.module';
import { KonsultasiPageModule } from './konsultasi-page/konsultasi-page.module';
import { LayananPageModule } from './layanan-page/layanan-page.module';
import { HyperlinkModule } from './hyperlink/hyperlink.module';
import { ProductsModule } from './products/products.module';
import 'dotenv/config'


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
  }), UserModule,
    ArticelCardModule,
    SliderSectionInfoModule,
    FounderCardModule,
    PersonalCardModule,
    BannerPageModule,
    GalleryHomeModule,
    GalleryTentangModule,
    QuestionModule,
    GalleryCompanyModule,
    YoutubeModule,
    HomePageModule,
    AboutPageModule,
    PelatihanPageModule,
    KonsultasiPageModule,
    LayananPageModule,
    HyperlinkModule,
    ProductsModule,
    WebinarPageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
