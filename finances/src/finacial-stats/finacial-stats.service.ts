import { Injectable } from '@nestjs/common';
import { CreateFinacialStatDto } from './dto/create-finacial-stat.dto';
import { UpdateFinacialStatDto } from './dto/update-finacial-stat.dto';

@Injectable()
export class FinacialStatsService {
  create(createFinacialStatDto: CreateFinacialStatDto) {
    return 'This action adds a new finacialStat';
  }

  findAll() {
    return `This action returns all finacialStats`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finacialStat`;
  }

  update(id: number, updateFinacialStatDto: UpdateFinacialStatDto) {
    return `This action updates a #${id} finacialStat`;
  }

  remove(id: number) {
    return `This action removes a #${id} finacialStat`;
  }
}
