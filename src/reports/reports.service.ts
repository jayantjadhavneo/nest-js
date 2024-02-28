import { Injectable } from '@nestjs/common';
import { ReportType,data } from './data';
import { v4 as uuid } from 'uuid';
import { Server } from 'ws';

@Injectable()
export class ReportsService {
  private clients: Set<WebSocket> = new Set();
  create(reportType:string,{ amount, source }) {
    const newReport={
      id:uuid(),
      amount,
      source,
      created_at:new Date(),
      updated_at:new Date(),
      type:reportType === "income" ? ReportType.INCOME : ReportType.EXPENSE
    }
    data.report.push(newReport);
    return newReport;
  }

  findAll(type:ReportType) {
    return data.report.filter((report)=>report.type==type);
  }

  findOne(type:string,id: string) {
    return data.report.filter((report)=>report.type==type).find(report=>report.id===id);
  }

  update(id: number, updateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
  emitEventToClients(event: any) {
    this.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(event));
      }
    });
  }
}
