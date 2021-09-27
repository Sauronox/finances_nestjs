import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { Stats } from '../entities/stats.entity';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
    @IsNotEmpty()
    companySymbol: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    stats: Stats;
}
