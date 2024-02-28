import { Module } from '@nestjs/common';
import { SummaryService } from './summary.service';
import { SummaryGateway } from './summary.gateway';
@Module({
  providers: [SummaryGateway, SummaryService],
})
export class SummaryModule {}
