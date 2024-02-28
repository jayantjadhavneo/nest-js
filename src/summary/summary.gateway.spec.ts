import { Test, TestingModule } from '@nestjs/testing';
import { SummaryGateway } from './summary.gateway';
import { SummaryService } from './summary.service';

describe('SummaryGateway', () => {
  let gateway: SummaryGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SummaryGateway, SummaryService],
    }).compile();

    gateway = module.get<SummaryGateway>(SummaryGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
