import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from './entity/user.entity';
import { ProtectMiddleware } from 'src/protect.middelware';



@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: "rahasia",
      signOptions: {expiresIn: "24h"}
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProtectMiddleware).forRoutes('user/users'); // Update the route as needed
  }
}
