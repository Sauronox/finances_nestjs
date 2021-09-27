import { Module } from '@nestjs/common';
import { FetchApiController } from './fetch-api.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        baseURL: '',
        headers: {},
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [FetchApiController],
})
export class FetchApiModule {}
