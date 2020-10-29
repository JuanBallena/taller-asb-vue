import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { ExStudent } from "@/interfaces/ExStudent";

export default {

  namespaced: true,

  state: {
    exStudentList: [],
    totalPages: -1,
    exStudent: null
  },

  mutations: {
    SET_EX_STUDENT_LIST(state: { exStudentList: [] }, data: []) {
      state.exStudentList = data;
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {
      state.totalPages = pages;
    },

    SET_EX_STUDENT(state: { exStudent: ExStudent }, data: ExStudent) {
      state.exStudent = data;
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
