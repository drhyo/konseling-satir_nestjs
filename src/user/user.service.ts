import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

    ) {}

        async createUser(payload: UserDto): Promise<boolean> {  
            try{
                await this.userRepository.save({
                    name: payload.name,
                    email: payload.email,
                    password: payload.password,
                    sex: payload.sex,
                    phone_number: payload.phone_number
                })  
                return true           
            
            }catch (e) {
                console.log(e);
                throw new Error('failed');
                
            }
        }
}