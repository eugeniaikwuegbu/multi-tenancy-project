import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as shell from 'shelljs';
import { AppModule } from './app.module';
import { BindKnex } from './middleware/middleware';
require('dotenv').config()

class Server {
  public static async start(): Promise<void> {
    const app = await NestFactory.create(AppModule);

    app.use(BindKnex);


    const port = process.env.PORT || 1000;

    await app.listen(port, () => {
      Logger.log('server listening on port ' + port, 'Server');
    });

    // Server.runMigration();
  }

  private static runMigration() {
    shell.exec('yarn mg:up', { silent: false });
  }
}

Server.start().then();
