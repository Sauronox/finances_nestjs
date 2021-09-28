import { Module } from '@nestjs/common';
import { FetchApiController } from './fetch-api.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FetchApiService } from './fetch-api.service';
import { CompaniesModule } from 'src/companies/companies.module';

@Module({
  imports: [
    ConfigModule,
    CompaniesModule,
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get('FINNHUB_APIENDPOINT'),
        headers: { 'X-Finnhub-Token': configService.get('FINNHUB_APIKEY') },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [FetchApiController],
  providers: [FetchApiService],
})
export class FetchApiModule {}
