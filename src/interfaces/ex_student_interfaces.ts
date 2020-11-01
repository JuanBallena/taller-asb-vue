import { IParameter } from './parameter_interfaces';

export interface IExStudent {
  
  id: number;
  name: string;
  lastName: string;
  urlLocationPhoto: string;
  documentType: IParameter;
  document: string;
  address: string;
  phone: string;
  hasDocumentCopy: boolean;
  promotion: string;
  status: IParameter;
}

export interface IFormCreateExStudent {
  
  name: string;
  lastName: string;
  idDocumentType: number;
  document: string;
  address: string;
  phone: string;
  promotion: string;
  username: string;
  password: string;
}

export interface IFormUpdateExStudent {

  id: number;
  name: string;
  lastName: string;
  idDocumentType: number;
  document: string;
  address: string;
  phone: string;
  promotion: string;
  hasDocumentCopy: boolean;
}