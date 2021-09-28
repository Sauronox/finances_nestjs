import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from 'mongodb';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(userDto: UserDto) {
    const newUser = new User(userDto.username, userDto.email, userDto.password);
    return await this.usersRepository.create(newUser);
  }

  async findOne(email: string): Promise<User> {
    return await this.usersRepository.findOne({email: email})
    // .find({
    //   where: {
    //     email: { $eq: email },
    //   },
    // });
  }

  async deleteUser(id: string) {
    await this.usersRepository.delete(id);
  }
}
