import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Logger } from 'mongodb';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { User, UserDocument, UserSchema} from './entities/user.entity';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(
    @InjectModel(User.name) private userSchema: Model<UserDocument>
  ) {}

  async createUser(userDto: UserDto) {
    const newUser = new this.userSchema(userDto);
    return await newUser.save()
  }

  async findOne(email: string): Promise<User> {
    return await this.userSchema.findOne({email: email}).exec()
  }

  async deleteUser(id: string) {
    await this.userSchema.deleteOne({_id: id}).exec()
  }
}
