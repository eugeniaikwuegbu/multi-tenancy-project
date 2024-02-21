import { Test, TestingModule } from '@nestjs/testing';
import { KnexBuilderService } from './knex-builder.service';

describe('KnexBuilderService', () => {
  let service: KnexBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnexBuilderService],
    }).compile();

    service = module.get<KnexBuilderService>(KnexBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
