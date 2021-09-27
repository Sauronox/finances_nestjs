import { BadRequestException, Controller, Get } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Controller('fetch-api')
export class FetchApiController {
  constructor(
    private readonly fetchApiService: FetchApiService,
    private httpService: HttpService,
  ) {}
  @Get('/fetch')
  findAll() {
    try {
      return this.httpService.get('/stock/metric?symbol=AAPL&metric=all').pipe(
        map((result) => {
          return result.data;
        }),
      );
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
