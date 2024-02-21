import { Module } from '@nestjs/common';
import { KnexBuilderService } from 'src/modules/knex-builder/knex-builder.service';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, KnexBuilderService],
})
export class UsersModule {}
