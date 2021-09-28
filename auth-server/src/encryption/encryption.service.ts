import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionService {
    constructor(private configService: ConfigService){}

    async encrypteElement(element: string){
        const saltOrRounds = +this.configService.get<number>('SAL_ROUND_CRYPT');

        const hash = await bcrypt.hash(element, saltOrRounds);
        return hash
    }

    async compareElementWithHash(password: string, hash: string): Promise<boolean> {
        const isMatching = await bcrypt.compare(password, hash);
        return isMatching
    }
}
