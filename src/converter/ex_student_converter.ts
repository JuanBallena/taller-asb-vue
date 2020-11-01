import { IExStudent, IFormCreateExStudent, IFormUpdateExStudent } from '@/interfaces/ex_student_interfaces';
import { ExStudent } from '@/models/ExStudent';

export function toExStudentModel(data: IExStudent): ExStudent {

  const exStudentModel = new ExStudent(
    data.id,
    data.name,
    data.lastName,
    data.urlLocationPhoto,
    data.documentType,
    data.document,
    data.address,
    data.phone,
    data.hasDocumentCopy,
    data.promotion,
    data.status,
  );
  return exStudentModel;
}

export function toCreateExStudentFormDto(form: IFormCreateExStudent): object {

  const createExStudentFormDto = {
    exStudent: {
      data : {
        name: form.name,
        lastName: form.lastName,
        idDocumentType: form.idDocumentType,
        document: form.document,
        address: form.address,
        phone: form.phone,
        promotion: form.promotion,
        username: form.username,
        password: form.password
      }
    }
  }
  return createExStudentFormDto;
}

export function toUpdateExStudentFormDto(form: IFormUpdateExStudent): object {

  const updateExStudentFormDto = {
    exStudent: {
      data : {
        idExStudent: form.id,
        name: form.name,
        lastName: form.lastName,
        idDocumentType: form.idDocumentType,
        document: form.document,
        address: form.address,
        phone: form.phone,
        promotion: form.promotion,
        hasDocumentCopy: form.hasDocumentCopy
      }
    }
  }
  return updateExStudentFormDto;
}

