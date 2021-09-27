import { BadRequestException, Controller, Get } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';

@Controller('fetch')
export class FetchApiController {
    constructor(
        private readonly fetchApiService: FetchApiService,

    ) {}
    @Get()
    findAll() {
        return this.fetchApiService.fetchAllStock();
    }
}
