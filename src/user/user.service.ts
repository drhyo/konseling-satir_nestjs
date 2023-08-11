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