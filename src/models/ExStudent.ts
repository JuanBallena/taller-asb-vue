import { PARAMETER_ACTIVE, PARAMETER_ACTIVE_S, PARAMETER_INACTIVE_S } from '@/definitions/parameter_definition';
import { Parameter } from '@/models/Parameter';

export class ExStudent {

  public id: number
  public name: string
  public lastName: string
  public urlLocationPhoto: string
  public documentType: Parameter
  public document: string
  public address: string
  public phone: string
  public hasDocumentCopy: boolean
  public promotion: string
  public status: Parameter

  constructor(
    id: number,
    name: string,
    lastName: string,
    urlLocationPhoto: string,
    documentType: Parameter,
    document: string,
    address: string,
    phone: string,
    hasDocumentCopy: boolean,
    promotion: string,
    status: Parameter
  ) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.urlLocationPhoto = urlLocationPhoto;
    this.documentType = documentType;
    this.document = document;
    this.address = address;
    this.phone = phone;
    this.hasDocumentCopy = hasDocumentCopy;
    this.promotion = promotion;
    this.status = status;
  }

  public getFullName(): string {
    return this.name + ' ' + this.lastName;
  }

  public getHasDocumentCopy(): string {
    return this.hasDocumentCopy ? "Si" : "No";
  }

  public getPromotion(): string {
    return this.promotion ? this.promotion : "No definido";
  }
  
  public getStatusColor(): string {
    return this.status.id == PARAMETER_ACTIVE ? 'successColor' : 'dangerColor';
  }
}