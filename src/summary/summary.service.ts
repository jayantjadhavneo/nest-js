import { Inject, Injectable } from '@nestjs/common';
import {  count, eq, sql  } from 'drizzle-orm';
import { db } from '../drizzle/db';

import { crypto, etherium_data } from '../drizzle/schema';
// import db from 'src/drizzle.config';
@Injectable()
export class SummaryService {
   

   async sendData(body:JSON) : Promise<any[]>{
    try {
      /* console.log(db
        .select()
        .from(etherium_data).offset(0).limit(10));
      const response = await db
        .select()
        .from(etherium_data)
        .offset(0)
        .limit(10);
  
      console.log(response);
      return response; */
      console.log(db.select({id:etherium_data.idEth}).from(etherium_data).offset(0).limit(10));
      const rows = await db.select().from(etherium_data).limit(10).offset(0);
      return rows;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
    // const result = await db.query.etherium.findMany({});
        
    }
}
