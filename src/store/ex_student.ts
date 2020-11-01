import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { ExStudent } from "@/models/ExStudent";
import { IExStudent, IFormCreateExStudent, IFormUpdateExStudent } from "@/interfaces/ex_student_interfaces";
import * as exStudentConverter from "@/converter/ex_student_converter";

export default {

  namespaced: true,

  state: {
    exStudentList: [] as ExStudent[],
    totalPages: -1,
    exStudent: ExStudent
  },

  mutations: {
    SET_EX_STUDENT_LIST(state: { exStudentList: ExStudent[] }, data: IExStudent[]) {

      state.exStudentList = [];
      data.forEach((exStudent, i) => {
        const exStudentModel = exStudentConverter.toExStudentModel(exStudent);
        state.exStudentList.push(exStudentModel);
      });
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {

      state.totalPages = pages;
    },

    SET_EX_STUDENT(state: { exStudent: ExStudent }, data: IExStudent) {

      state.exStudent = exStudentConverter.toExStudentModel(data);
    }
  },

  actions: {
    async getExStudentList({ commit }: any,  parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/ex_students${parameters}`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          const pages = response.data['pages'];
          commit('SET_EX_STUDENT_LIST', data);
          commit('SET_TOTAL_PAGES', pages);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },

    async getExStudent({ commit }: any, idExStudent: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/ex_students/${ idExStudent }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_EX_STUDENT', data);
        } else {
          alert(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    async saveExStudent({ commit }: any, form: IFormCreateExStudent) {

      try {
        const dataPost = exStudentConverter.toCreateExStudentFormDto(form);
        const response = await axios.post(getBaseUrlApi() + `/ex_students`, dataPost/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          
          commit('SET_EX_STUDENT', data);
        } else {
          console.log(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    async updateExStudent({ commit }: any, form: IFormUpdateExStudent) {
      
      try {
        const dataPost = exStudentConverter.toUpdateExStudentFormDto(form);
        const response = await axios.put(getBaseUrlApi() + `/ex_students/${form.id}`, dataPost/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_EX_STUDENT', data);
        } else {
          console.log(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    resetExStudentList({commit}: any) {
      commit('SET_EX_STUDENT_LIST', []);
    },

    resetTotalPages({commit}: any) {
      commit('SET_TOTAL_PAGES', -1);
    },

    resetExStudent({commit}: any) {
      commit('SET_EX_STUDENT', null);
    }
  },
}
