import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KnexBuilderController } from './knex-builder/knex-builder.controller';
import { KnexBuilderModule } from './knex-builder/knex-builder.module';
import { KnexBuilderService } from './knex-builder/knex-builder.service';
import { BindKnex } from './middleware/middleware';
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
    consumer.apply(BindKnex).forRoutes(UsersController)
  }
}
