import { Module } from '@nestjs/common';
import { KnexBuilderService } from './knex-builder.service';
import { KnexBuilderController } from './knex-builder.controller';
import { Knex } from 'knex';

@Module({
  controllers: [KnexBuilderController],
  providers: [KnexBuilderService],
})
export class KnexBuilderModule {}
