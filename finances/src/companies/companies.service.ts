import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from './schema/company.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompaniesService {
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

  findOne(companySymbol: string) {
    const company = this.companyModel.find({ companySymbol: companySymbol})
    if(!company){
      throw new NotFoundException;
    }
    return company;
  }

  
  async update(companySymbol: string,updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    var company = this.companyModel.find(element => element.name = companySymbol) 

  return
    //return this.companyModel.updateOne();
  }

  remove(companySymbol: string) {
    return this.companyModel.deleteOne({companySymbol: companySymbol});
  }
}
