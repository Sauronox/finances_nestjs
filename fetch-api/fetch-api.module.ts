import { Module } from '@nestjs/common';
import { FetchApiService } from './fetch-api.service';

@Module({
  providers: [FetchApiService]
})
export class FetchApiModule {}
