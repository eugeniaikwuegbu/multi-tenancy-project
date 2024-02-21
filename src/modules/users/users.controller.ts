import { Body, Controller, Post, Query, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  create(
    @Query('tenantId') tenantId: string,
    @Req() req: Request,
    @Body() createUserDto: CreateUserDto,
  ) {
    const { User } = req['models'];

    return this.usersService.createUser(tenantId, User, createUserDto);
  }

  @Post('/create-tenant')
  createTenant(@Query('tenantId') tenantId: string) {
    return this.usersService.createTenant();
  }
}
