import { PARAMETER_ACTIVE } from '@/definitions/parameter_definition';
import { Parameter } from '@/models/Parameter';

export class Student {

  public id: number
  public name: string
  public lastName: string
  public urlLocationPhoto: string
  public documentType: Parameter
  public document: string
  public address: string
  public phone: string
  public hasDocumentCopy: boolean
  public suspended: boolean
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
    suspended: boolean,
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
    this.suspended = suspended;
    this.status = status;
  }

  public fullName(): string {
    return this.name + ' ' + this.lastName;
  }

  public hasDocumentCopyText(): string {
    return this.hasDocumentCopy ? "Si" : "No";
  }
  public getStatusText(): string {
    return this.suspended ? 'Suspendido' : this.status.description;
  }
  
  public getStatusColor(): string {
    if (this.suspended) {
      return 'secondaryColor';
    }
    return this.status.id == PARAMETER_ACTIVE ? 'successColor' : 'dangerColor';
  }
}