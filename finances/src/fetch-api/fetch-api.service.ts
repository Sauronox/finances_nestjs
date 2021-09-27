import { BadRequestException, Injectable } from '@nestjs/common';
import { ApiStockModel } from './Models/ApiStockModel';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class FetchApiService {
  constructor(private httpService: HttpService) {}

  async fetchAllStock() {
    const allStocks: string[] = ['AAPL','AMZN','FB','GOOGL'];
    let allStocksFetched: ApiStockModel[] = [];
    for (const element of allStocks) {
      const stock = await this.fetchOneStock(element);
      console.log(element);
      console.log(stock);
      allStocksFetched.push(stock);
    }
    console.log(allStocksFetched);
    return allStocksFetched;
  }

  async fetchOneStock(mnemonic: string) {
    try {
      return lastValueFrom(
        this.httpService
          .get('/stock/metric?symbol=' + mnemonic + '&metric=all')
          .pipe(
            map((result) => {
              const fetchedValue = result.data.metric;
              return new ApiStockModel(
                fetchedValue.dividendYieldIndicatedAnnual,
                fetchedValue.netProfitMarginTTM,
                fetchedValue.roeTTM,
              );
            }),
          ),
      );
    } catch (error) {
      throw new Error('mnemonic fail');
    }
  }
}
