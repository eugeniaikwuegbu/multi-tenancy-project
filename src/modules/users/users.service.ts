import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { KnexBuilderService } from 'src/modules/knex-builder/knex-builder.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  @Inject(KnexBuilderService)
  private readonly knexBuilderService: KnexBuilderService;

  async createUser(tenantId: string, userModel, createUserDto: CreateUserDto) {
    const schemaExists =
      await this.knexBuilderService.doesSchemaExist(tenantId);

    if (!schemaExists) {
      throw new NotFoundException('Organizaion does not exist');
    }

    await userModel.query().insertGraphAndFetch(createUserDto).returning('id');
  }

  async createTenant() {
    return await this.knexBuilderService.createSchema();
  }
}
