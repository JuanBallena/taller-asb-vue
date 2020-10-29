import { PARAMETER_ACTIVE } from '@/definitions/parameter_definition';
import { Parameter } from '@/models/Parameter';
import { Role } from "@/models/Role";

export class User {

  public id: number
  public username: string
  public role: Role  
  public status: Parameter

  constructor(
    id: number,
    username: string,
    role: Role,
    status: Parameter
  ) {
    this.id = id;
    this.username = username;
    this.role = role;
    this.status = status;
  }

  public getStatusColor(): string {
    return this.status.id == PARAMETER_ACTIVE ? 'successColor' : 'dangerColor';
  }
}