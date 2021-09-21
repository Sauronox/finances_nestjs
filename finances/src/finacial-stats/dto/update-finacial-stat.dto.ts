import { PartialType } from '@nestjs/mapped-types';
import { CreateFinacialStatDto } from './create-finacial-stat.dto';

export class UpdateFinacialStatDto extends PartialType(CreateFinacialStatDto) {}
