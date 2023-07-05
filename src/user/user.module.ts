import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from './entity/user.entity';



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
export class UserModule {}
