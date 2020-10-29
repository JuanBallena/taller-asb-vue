import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { Student } from "@/models/Student";

export default {

  namespaced: true,

  state: {
    studentList: [] as Student[],
    totalPages: -1,
    student: Student
  },

  mutations: {
    SET_STUDENT_LIST(state: { studentList: Student[] }, data: Student[]) {
      state.studentList = [];

      data.forEach((student, i) => {
        const studentModel = new Student(
          student.id,
          student.name,
          student.lastName,
          student.urlLocationPhoto,
          student.documentType,
          student.document,
          student.address,
          student.phone,
          student.hasDocumentCopy,
          student.suspended,
          student.status,
        );
        state.studentList.push(studentModel);
      });
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {
      state.totalPages = pages;
    },

    SET_STUDENT(state: { student: Student }, data: Student) {
      state.student = data;
    }
  },

  actions: {
    async getStudentList({ commit }: any, parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/students${ parameters }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
  
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          const pages = response.data['pages'];
          commit('SET_STUDENT_LIST', data);
          commit('SET_TOTAL_PAGES', pages);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },

    async getStudent({ commit }: any, idStudent: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/students/${ idStudent }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_STUDENT', data);
        } else {
          alert(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    // resetStudentList({commit}: any) {
    //   commit('SET_STUDENT_LIST', []);
    // },

    // resetTotalPages({commit}: any) {
    //   commit('SET_TOTAL_PAGES', -1);
    // },

    // resetStudent({commit}: any) {
    //   commit('SET_STUDENT', null);
    // }
  },
}
