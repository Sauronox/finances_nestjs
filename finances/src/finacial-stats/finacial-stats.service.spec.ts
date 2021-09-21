import { Test, TestingModule } from '@nestjs/testing';
import { FinacialStatsService } from './finacial-stats.service';

describe('FinacialStatsService', () => {
  let service: FinacialStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinacialStatsService],
    }).compile();

    service = module.get<FinacialStatsService>(FinacialStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
