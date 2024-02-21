import { IBase } from '../base';
export interface IUser extends IBase {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}
