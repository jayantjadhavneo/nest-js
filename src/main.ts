import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express'; // Import NestExpressApplication
import * as hbs from 'hbs';
// import * as WebSocket from 'ws';


import * as path from 'path';
async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule); // Specify NestExpressApplication
  const httpServer = app.getHttpServer();
 /*  const wss = new WebSocket.Server({ server: httpServer });

  // WebSocket server handling
  wss.on('connection', (ws) => {
    // Handle WebSocket connection
    console.log("websocket connected");
  });
  */
  // Configure Handlebars view engine
  // app.engine('hbs', hbs());
  app.set('view engine', 'hbs');
  const rootDirectory = path.resolve(__dirname, '..');
  app.set('views', path.join(rootDirectory+ '/views'));
  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist:true,
    })
  );
  
  await app.listen(3001);
  
}
bootstrap();
