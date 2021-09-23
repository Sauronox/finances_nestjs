import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Stats } from '../entities/stats.entity';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  companySymbol: string;

  @Prop()
  name: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
