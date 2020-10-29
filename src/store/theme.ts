import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { Theme } from "@/interfaces/Theme";

export default {

  namespaced: true,

  state: {
    themeList: [],
    totalPages: -1,
    theme: null,
  },

  mutations: {
    SET_THEME_LIST(state: { themeList: [] }, data: []) {
      state.themeList = data;
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {
      state.totalPages = pages;
    },

    SET_THEME(state: { theme: Theme }, data: Theme) {
      state.theme = data;
    }
  },

  actions: {
    async getThemeList({ commit }: any, parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/themes${ parameters }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
  
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          const pages = response.data['pages'];
          commit('SET_THEME_LIST', data);
          commit('SET_TOTAL_PAGES', pages);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },

    async getTheme({ commit }: any, idTheme: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/themes/${ idTheme }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_THEME', data);
        } else {
          alert(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    resetThemeList({commit}: any) {
      commit('SET_THEME_LIST', []);
    },

    resetTotalPages({commit}: any) {
      commit('SET_TOTAL_PAGES', -1);
    },

    resetTheme({commit}: any) {
      commit('SET_THEME', null);
    }
  },

}
