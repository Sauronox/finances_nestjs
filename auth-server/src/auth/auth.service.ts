import { BadRequestException, Injectable } from '@nestjs/common';
import { EncryptionService } from 'src/encryption/encryption.service';
import { UserDto } from 'src/users/dto/user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  jwtService: any;
  constructor(private readonly usersService: UsersService, private readonly encryptionService: EncryptionService){}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const validPassword = await this.encryptionService.compareElementWithHash(password, user.password)
    if (user && validPassword) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(userDto: UserDto): Promise<User>{
    try {
      userDto.password = await this.encryptionService.encrypteElement(userDto.password)
      return this.usersService.createUser(userDto)
    } catch (error) {
      throw new BadRequestException('error to register user: '+ error.message)
    }
  }

  verif(){}
}
