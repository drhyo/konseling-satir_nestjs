import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly usersRepository: Repository<UserEntity>
  ) {
  }

  async create(data: any): Promise<UserEntity> {
    return this.usersRepository.save(data)
  } 


  async findOne(condition: any): Promise<UserEntity> {
    return this.usersRepository.findOne({ where: condition });
  }

  delete(id: string) {
    return this.usersRepository.delete(id)
  }
}









// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { UserDto } from 'src/dto/user.dto';
// import { Repository } from 'typeorm';
// import * as bcrypt from 'bcrypt'
// import { JwtService } from '@nestjs/jwt';
// import { UserEntity } from './entity/user.entity';



// @Injectable()
// export class UserService {
//     constructor(
//         @InjectRepository(UserEntity)
//         private userRepository: Repository<UserEntity>,
//         private jwt: JwtService
//     ) {}
//         // create user
//         async createUser(payload: UserDto): Promise<boolean> {  
//             try{
//                 const data: UserEntity = new UserEntity
//                 data.email = payload.email
//                 data.password = payload.password

//                 await this.userRepository.save(data)
//                 return true                      
//             }catch (e) {
//                 console.log(e);
//                 throw new Error('failed');
                
//             }
//         }

//         // login user 
//         async loginUser(payload: UserDto): Promise<any> {
//             try{
//                 const user: UserEntity = await this.userRepository.findOneBy({
//                     email: payload.email
//                 })
//                 if (!user) {
//                     throw new Error('Sorry, your email and password was incorrect')
//                 }
//                 const isValid = await bcrypt.compare(payload.password, user.password)
//                 if (!isValid) {
//                     throw new Error('Sorry, your email and password was incorrect')
//                 }
//                 const payloadJwt = {
//                     sub: user.id,
//                     email: user.email,
//                 }
//                 return{
//                     token: await this.jwt.signAsync(payloadJwt)
//                 }
//             } catch(e) {
//                 console.log(e);
//                 throw new Error('Sorry, your email and password was incorrect');
                
//             }
//         }

//         // find all user
//         async getUser (): Promise<UserEntity[]> {
//             return await this.userRepository.find()
//         }


        // find user by id 
        // async getUserById(id: string): Promise<UserEntity> {
        //     return await this.userRepository.findOne(id)
        // }
// }


