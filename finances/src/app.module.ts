import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FetchApiService } from './fetch-api/fetch-api.service';
import { FetchApiModule } from './fetch-api/fetch-api.module';

@Module({
  imports: [UsersModule, FetchApiModule],
  controllers: [AppController],
  providers: [AppService, FetchApiService],
})
export class AppModule {}