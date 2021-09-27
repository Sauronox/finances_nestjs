import { BadRequestException, Controller, Get } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';
import {ConfigService} from "@nestjs/config";

@Controller('fetch')
export class FetchApiController {
    constructor(
        private readonly fetchApiService: FetchApiService,
        private configService: ConfigService
    ) {}
    @Get()
    findAll() {
        console.log(this.configService.get('FINNHUB_APIKEY'));
        let stocks = this.fetchApiService.fetchAllStock(); // todo , make null values = 0, push in bdd, ajouter le nom a l'objet
    }
}
