import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { FinacialStatsModule } from './finacial-stats/finacial-stats.module';

@Module({
  imports: [UsersModule, CompaniesModule, FinacialStatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
