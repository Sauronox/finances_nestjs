import { Injectable } from '@nestjs/common';

@Injectable()
export class FetchApiService {

    fetchAll(): [ApiStockModel] {
    return [new ApiStockModel()];
  }
}