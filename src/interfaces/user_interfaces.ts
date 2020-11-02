import { IRole } from './role_interfaces';
import { IParameter } from "./parameter_interfaces";

export interface IUser {
  id: number;
  username: string;
  role: IRole;
  status: IParameter;
}

export interface IFormCreateUser {

  username: string;
  password: string;
  idRole: number;
}

export interface IFormUpdateUser {

  id: number;
  username: string;
  idRole: number;
  idStatus: number;

}