import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './schema/company.schema';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }
  
  @Put()
  update(@Body() updateCompanyDto: UpdateCompanyDto, @Body() companySymbol: string ) {
    return this.companiesService.update(companySymbol,updateCompanyDto);
  }

  @Get(':companySymbol')
  findOne(@Param('companySymbol') companySymbol: string) {
    return this.companiesService.findOne(companySymbol);
  }

  @Delete()
  remove(@Body() companySymbol: string){
    return this.companiesService.remove(companySymbol);
  }
}
