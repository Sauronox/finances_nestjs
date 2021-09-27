import { Module } from '@nestjs/common';
import { FetchApiController } from './fetch-api.controller';

@Module({
  controllers: [FetchApiController]
})
export class FetchApiModule {}
