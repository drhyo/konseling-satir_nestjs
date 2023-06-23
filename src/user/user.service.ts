import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        private jwt: JwtService
    ) {}

        async createUser(payload: UserDto): Promise<boolean> {  
            try{
                const data: UserEntity = new UserEntity
                data.name = payload.name
                data.email = payload.email
                data.password = payload.password
                data.sex = payload.sex
                data.phone_number = payload.phone_number
    
                await this.userRepository.save(data)
                return true                      
            }catch (e) {
                console.log(e);
                throw new Error('failed');
                
            }
        }


        async loginUser(payload: UserDto): Promise<any> {
            try{
                const user: UserEntity = await this.userRepository.findOneBy({
                    email: payload.email
                })
                if (!user) {
                    throw new Error('Sorry, your email and password was incorrect')
                }
                const isValid = await bcrypt.compare(payload.password, user.password)
                if (!isValid) {
                    throw new Error('Sorry, your email and password was incorrect')
                }
                const payloadJwt = {
                    sub: user.id,
                    email: user.email,
                    name: user.name,
                    phone_number: user.phone_number
                }
                return{
                    token: await this.jwt.signAsync(payloadJwt)
                }
            } catch(e) {
                console.log(e);
                throw new Error('Sorry, your email and password was incorrect');
                
            }
        }
}