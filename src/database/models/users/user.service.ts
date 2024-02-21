import { JSONSchema } from 'objection';
import { BaseModel } from '../base';
import { IUser } from './user.interface';
import { UserValidation } from './user.validation';

export class UserModel extends BaseModel implements IUser {
  public email: IUser['email'];
  public password: IUser['password'];
  public last_name: IUser['last_name'];
  public first_name: IUser['first_name'];

  static get tableName() {
    return `${process.env.TENANT_ID}.users`;
  }

  static get jsonSchema(): JSONSchema {
    return UserValidation;
  }

  static get relationMappings() {
    return {};
  }
}
