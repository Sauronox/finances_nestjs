import { Module } from '@nestjs/common';
import { FetchApiController } from './fetch-api.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {FetchApiService} from "./fetch-api.service";

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: 'https://finnhub.io',
        headers: {},
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [FetchApiController],
  providers: [FetchApiService],
})
export class FetchApiModule {}
