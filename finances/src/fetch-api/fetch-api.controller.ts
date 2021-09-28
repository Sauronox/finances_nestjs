import { BadRequestException, Controller, Get, Logger } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';
import {ConfigService} from "@nestjs/config";
import { CreateCompanyDto } from 'src/companies/dto/create-company.dto';
import { CompaniesService } from 'src/companies/companies.service';
import { Stats } from 'src/companies/entities/stats.entity';

@Controller('fetch')
export class FetchApiController {
    private logger = new Logger(FetchApiService.name);

    constructor(
        private readonly fetchApiService: FetchApiService,
        private configService: ConfigService,
        private readonly companyService: CompaniesService,
    ) {}
    @Get()
    async findAll() {
        console.log(this.configService.get('FINNHUB_APIKEY'));
        let stocks = await this.fetchApiService.fetchAllStock();
        this.logger.debug(stocks) // todo ajouter le nom a l'objet
        await Promise.all(
            stocks.map(async (element) => {
                this.logger.debug(JSON.stringify(element))
                let stats = new Stats(
                    element.roeTTM,
                    element.dividendYieldIndicatedAnnual,
                    element.netProfitMarginTTM,
                )
                let companyDto = new CreateCompanyDto()
                companyDto.companySymbol = element.companySymbol;
                companyDto.name = "TBD";
                companyDto.stats = stats;
                await this.companyService.create(companyDto);
            })
        );
        return stocks       
    }
}
