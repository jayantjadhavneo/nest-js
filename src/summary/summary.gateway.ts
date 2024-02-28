import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SummaryService } from './summary.service';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway()
export class SummaryGateway {
  @WebSocketServer()
  server:Server;

  constructor(private readonly summaryService: SummaryService) {}

  OnModuleInit(){
    this.server.on('connection',(socket)=>{
      console.log(socket.id);
      console.log('connected server')
    })
  }

  @SubscribeMessage('summary')
    handleEvent(@MessageBody() body: any): any {
      // return {"msg":"some text",body} ;
      // console.log(body)
     return this.server.emit('onsummary',this.summaryService.sendData(body));
    }
}
