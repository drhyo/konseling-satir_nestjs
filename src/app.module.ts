import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { UserEntity } from './user/entity/user.entity';
import { ProductEntity } from './product/entity/product.entity';
import { BlogModule } from './blog/blog.module';
import { BlogEntity } from './blog/entity/blog.entity';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'konseling_satir',
    entities: [UserEntity, ProductEntity, BlogEntity],
    synchronize: false,
  }), UserModule, ProductModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
