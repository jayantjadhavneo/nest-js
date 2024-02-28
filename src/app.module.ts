import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import { AdminModule } from './admin/admin.module';
import { SummaryModule } from './summary/summary.module';
import { DrizzleModule } from './drizzle/drizzle.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ ConfigModule.forRoot({
    isGlobal: true, // This makes the environment variables globally available
  }),ReportsModule, AdminModule,SummaryModule, DrizzleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
