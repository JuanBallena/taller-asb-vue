import { IStudent, IFormCreateStudent, IFormUpdateStudent } from '@/interfaces/student_interfaces';
import { Student } from '@/models/Student';

export function toStudentModel(data: IStudent): Student {

  const studentModel = new Student(
    data.id,
    data.name,
    data.lastName,
    data.urlLocationPhoto,
    data.documentType,
    data.document,
    data.address,
    data.phone,
    data.hasDocumentCopy,
    data.suspended,
    data.status,
  );
  return studentModel;
}

export function toCreateStudentFormDto(form: IFormCreateStudent): object {

  const createStudentFormDto = {
    student: {
      data : {
        name: form.name,
        lastName: form.lastName,
        idDocumentType: form.idDocumentType,
        document: form.document,
        address: form.address,
        phone: form.phone,
        username: form.username,
        password: form.password
      }
    }
  }
  return createStudentFormDto;
}

export function toUpdateStudentFormDto(form: IFormUpdateStudent): object {

  const updateStudentFormDto = {
    student: {
      data : {
        idStudent: form.id,
        name: form.name,
        lastName: form.lastName,
        idDocumentType: form.idDocumentType,
        document: form.document,
        address: form.address,
        phone: form.phone,
        hasDocumentCopy: form.hasDocumentCopy,
        suspended: form.suspended
      }
    }
  }
  return updateStudentFormDto;
}

