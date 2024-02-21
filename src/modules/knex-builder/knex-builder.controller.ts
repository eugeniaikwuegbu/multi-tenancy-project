import { Controller } from '@nestjs/common';
import { KnexBuilderService } from './knex-builder.service';

@Controller('knex-builder')
export class KnexBuilderController {
  constructor(private readonly knexBuilderService: KnexBuilderService) {}
}
