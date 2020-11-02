import { IUser, IFormCreateUser, IFormUpdateUser } from "@/interfaces/user_interfaces";
import { User } from '@/models/User';

export function toUserModel(data: IUser): User {
  
  const themeModel = new User(
    data.id,
    data.username,
    data.role,
    data.status
  )
  return themeModel;
}

export function toCreateUserFormDto(form: IFormCreateUser): object {

  const createUserFormDto = {
    user: {
      data: {
        username: form.username,
        password: form.password,
        idRole: form.idRole
      }
    }
  }
  return createUserFormDto;
}

export function toUpdateUserFormDto(form: IFormUpdateUser): object {
  const updateUserFormDto = {
    user: {
      data: {
        idUser: form.id,
        username: form.username,
        idRole: form.idRole,
        idStatus: form.idStatus
      }
    }
  }
  return updateUserFormDto;
}