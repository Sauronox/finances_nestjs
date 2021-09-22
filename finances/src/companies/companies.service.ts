import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';
import { Stats } from './entities/stats.entity';

@Injectable()
export class CompaniesService {

  companies:Company[] = [];

  create(createCompanyDto: CreateCompanyDto) {
    const newCompany = new Company("toto","company1",new Stats(10,34,23));
    this.companies.push(newCompany);

    return 'This action adds a new company';
  }

  findAll() {
    return this.companies;
  }

  findOne(name: string) {
    const company = this.companies.find(element => element.name = name)
    if(!company){
      throw new NotFoundException;
    }
    return {...company};
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
