import { IParameter } from './parameter_interfaces';

export interface IStudent {
  id: number;
  name: string;
  lastName: string;
  urlLocationPhoto: string;
  documentType: IParameter;
  document: string;
  address: string;
  phone: string;
  hasDocumentCopy: boolean;
  suspended: boolean;
  status: IParameter;
}

export interface IFormCreateStudent {
  name: string;
  lastName: string;
  idDocumentType: number;
  document: string;
  address: string;
  phone: string;
  username: string;
  password: string;
}

export interface IFormUpdateStudent {
  id: number;
  name: string;
  lastName: string;
  idDocumentType: number;
  document: string;
  address: string;
  phone: string;
  hasDocumentCopy: boolean;
  suspended: boolean;
}