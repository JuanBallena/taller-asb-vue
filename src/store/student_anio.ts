import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";

export default {

  namespaced: true,

  state: {
    studentAnioList: [],
    totalPages: -1,
  },

  mutations: {
    SET_STUDENT_ANIO_LIST(state: { studentAnioList: [] }, data: []) {
      state.studentAnioList = data;
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {
      state.totalPages = pages;
    }
  },

  actions: {
    async getStudentAnioList({ commit }: any, parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/students/anio/2020/${parameters}`/*, getAuthorization()*/)
        const responseCode = response.data['student_anio_list']['responseCode'];
        
        if (responseCodeOk(responseCode)) {
          const data = response.data['student_anio_list']['data'];
          const pages = response.data['student_anio_list']['pages'];
          commit('SET_STUDENT_ANIO_LIST', data);
          commit('SET_TOTAL_PAGES', pages);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },

    clearStates({ commit }: any) {
      commit('SET_STUDENT_ANIO_LIST', []);
      commit('SET_TOTAL_PAGES', -1);
    }
  },

}
