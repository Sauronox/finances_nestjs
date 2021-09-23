import { IsNotEmpty } from 'class-validator';
import { Stats } from '../entities/stats.entity';

export class CreateCompanyDto {
  @IsNotEmpty()
  companySymbol: string;
  @IsNotEmpty()
  name: string;
}
