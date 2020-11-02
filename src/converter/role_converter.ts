import { IRole } from '@/interfaces/role_interfaces';
import { Role } from '@/models/Role';

export function toRoleModel(data: IRole): Role {

  const roleModel = new Role(
    data.id,
    data.name,
    data.displayName
  );
  return roleModel;
}