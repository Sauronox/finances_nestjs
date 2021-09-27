import { Test, TestingModule } from '@nestjs/testing';
import { FetchApiController } from './fetch-api.controller';

describe('FetchApiController', () => {
  let controller: FetchApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FetchApiController],
    }).compile();

    controller = module.get<FetchApiController>(FetchApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
