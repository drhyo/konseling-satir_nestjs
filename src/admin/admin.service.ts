import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/dto/admin.dto';
import { AdminEntity } from 'src/entity/admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(AdminEntity)
        private adminRepository: Repository<AdminEntity>,
        private jwt: JwtService
    ) {}

    async createAdmin(payload: AdminDto): Promise<boolean> {
        try {
            const data: AdminEntity = new AdminEntity
            data.name = payload.name
            data.email = payload.email
            data.password = payload.password

            await this.adminRepository.save(data)
            return true
        } catch (e) {
            console.log(e);
            throw new Error('failed')
            
        }
    }

    async loginAdmin(payload: AdminDto): Promise<any> {
        try {
            const admin: AdminEntity = await this.adminRepository.findOneBy({
                email: payload.email
            })
            if (!admin) {
                throw new Error('Sorry, your email and password was incorrect')
            }
            const isValid = await bcrypt.compare(payload.password, admin.password)
            if (!isValid) {
                throw new Error('Sorry, your email and password was incorrect')
            }
            const payloadJwt = {
                sub: admin.id,
                name: admin.name,
                email: admin.email,
            }
            return{
                token: await this.jwt.signAsync(payloadJwt)
            }
        } catch (e) {
            console.log(e);
            throw new Error('Sorry, your email and password was incorrect')
            
        }
    }



}
