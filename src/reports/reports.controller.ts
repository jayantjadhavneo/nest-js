import { Controller, Get, Post, Body, Put, Param, Delete ,ParseUUIDPipe } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { data , ReportType } from './data';
import { v4 as uuid } from 'uuid';
// import { report } from 'process';
@Controller('reports/:type')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService ) {}
  
  @Post()
  create(@Body() {amount,source}: {
    amount:number; source:string
  },@Param('type') type:string) {
    /* const newReport={
      id:uuid(),
      amount,
      source,
      created_at:new Date(),
      updated_at:new Date(),
      type:type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport);
    return newReport; */
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportsService.create(reportType, { amount, source });
    
  }
  @Post('event')
  emitEvent(@Body() eventPayload: any) {
    // Process the event payload
    // Emit the event to WebSocket clients
    // this.reportsService.emitEventToClients(eventPayload);
    return { message: 'Event emitted successfully' };
  }

  @Get()
  findAll(@Param('type') type:string) {
     const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; 
    return this.reportsService.findAll(reportType);
  }

  @Get(':id')
  findOne(@Param('type') type:string, @Param('id',ParseUUIDPipe) id: string) {
    
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; 
    
    return this.reportsService.findOne(reportType,id);
    // return data.report.filter((report)=>report.type==reportType).find(report=> report.id===id);
  }

  @Put(':id')
  update(@Body() body: {
    amount:number; source:string
  },@Param('type') type:string,@Param('id') id: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE; 
    const reportToUpdate =data.report.filter((report)=>report.type===reportType).find((report)=>report.id===id);
    if(!reportToUpdate) return;
    const reportIndex=data.report.findIndex((report)=>report.id===reportToUpdate.id);
    data.report[reportIndex]={
      ...data.report[reportIndex],
      ...body,
      updated_at:new Date()
    }
    return data.report[reportIndex];
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const reportIndex=data.report.findIndex((report)=>report.id===id);
    data.report.splice(reportIndex,1)

  }
}
