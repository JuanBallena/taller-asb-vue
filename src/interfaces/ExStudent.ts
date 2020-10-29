import { Parameter } from './Parameter';

export interface ExStudent {
  id: number;
  name: string;
  lastName: string;
  urlLocationPhoto: string;
  documentType: Parameter;
  document: string;
  address: string;
  phone: string;
  hasDocumentCopy: boolean;
  promotion: string;
  status: Parameter;
}