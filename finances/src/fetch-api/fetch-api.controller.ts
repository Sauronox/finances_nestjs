import { BadRequestException, Controller, Get, Logger } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';
import {ConfigService} from "@nestjs/config";
import { CreateCompanyDto } from 'src/companies/dto/create-company.dto';
import { CompaniesService } from 'src/companies/companies.service';

@Controller('fetch')
export class FetchApiController {
    private logger = new Logger(FetchApiService.name);
    companyService: CompaniesService;
    constructor(
        private readonly fetchApiService: FetchApiService,
        private configService: ConfigService
    ) {}
    @Get()
    async findAll() {
        console.log(this.configService.get('FINNHUB_APIKEY'));
        let stocks = await this.fetchApiService.fetchAllStock(); // todo , make null values = 0, push in bdd, ajouter le nom a l'objet
        stocks.forEach(async (element) => {
            var companyDto = new CreateCompanyDto()
            companyDto.companySymbol = element.companySymbol;
            companyDto.name = "toto";
            await this.companyService.create(companyDto);
            this.logger.debug(companyDto);
        });
        return stocks       
    }
}
