import { BadRequestException, Controller, Get } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { plainToClass } from 'class-transformer';
import { ApiStockModel } from './Models/ApiStockModel';

@Controller('fetch')
export class FetchApiController {
  constructor(
    private readonly fetchApiService: FetchApiService,
    private httpService: HttpService,
  ) {}
  @Get()
  findAll() {
    try {
      return this.httpService.get('/stock/metric?symbol=AAPL&metric=all').pipe(
        map((result) => {
          console.log(result.data);
          const fetchedValue = result.data.metric;
          return new ApiStockModel(
            fetchedValue.dividendYieldIndicatedAnnual,
            fetchedValue.netProfitMarginTTM,
            fetchedValue.roeTTM,
          );
        }),
      );
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
