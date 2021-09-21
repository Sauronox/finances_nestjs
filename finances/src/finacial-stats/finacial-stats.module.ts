import { Module } from '@nestjs/common';
import { FinacialStatsService } from './finacial-stats.service';

@Module({
  providers: [FinacialStatsService]
})
export class FinacialStatsModule {}
