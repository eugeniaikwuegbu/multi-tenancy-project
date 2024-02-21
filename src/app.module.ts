import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BindKnex } from './middleware/middleware';
import { KnexBuilderController } from './modules/knex-builder/knex-builder.controller';
import { KnexBuilderModule } from './modules/knex-builder/knex-builder.module';
import { KnexBuilderService } from './modules/knex-builder/knex-builder.service';
import { UsersController } from './modules/users/users.controller';
import { UsersModule } from './modules/users/users.module';
// import { BaseModelModule } from './base-model/base-model.module';

@Module({
  imports: [KnexBuilderModule, UsersModule],
  controllers: [AppController, KnexBuilderController],
  providers: [AppService, KnexBuilderService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BindKnex).forRoutes(UsersController);
  }
}
