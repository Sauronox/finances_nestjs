import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './schema/company.schema';
import { Model } from 'mongoose';
import { log } from 'console';

@Injectable()
export class CompaniesService {
  private logger = new Logger('CompaniesService')
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCompany = new this.companyModel(createCompanyDto);
    return createdCompany.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  async findOne(companySymbol: string): Promise<Company> {
    const company = this.companyModel.findOne({ companySymbol: companySymbol}).exec();
    return company
  }

  
  async update(updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const result = this.companyModel.updateOne({companySymbol: updateCompanyDto.companySymbol},updateCompanyDto)
    return updateCompanyDto;
  }

  async remove(companySymbol: string): Promise<Boolean> {
    const company = this.companyModel.deleteOne({companySymbol: companySymbol})
    return true
  }
}
