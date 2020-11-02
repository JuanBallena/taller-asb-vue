import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { Theme } from "@/models/Theme";
import { ITheme, IFormCreateTheme, IFormUpdateTheme } from "@/interfaces/theme_interfaces";
import * as themeConverter from "@/converter/theme_converter";

export default {

  namespaced: true,

  state: {
    themeList: [] as Theme[],
    totalPages: -1,
    theme: Theme,
  },

  mutations: {
    SET_THEME_LIST(state: { themeList: Theme[] }, data: ITheme[]) {
      state.themeList = [];

      data.forEach((theme) => {
        const themeModel = themeConverter.toThemeModel(theme);
        state.themeList.push(themeModel);
      });
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {
      state.totalPages = pages;
    },

    SET_THEME(state: { theme: Theme }, data: ITheme) {
      state.theme = themeConverter.toThemeModel(data);
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

    async saveTheme({ commit }: any, form: IFormCreateTheme) {

      try {
        const dataPost = themeConverter.toCreateThemeFormDto(form);
        const response = await axios.post(getBaseUrlApi() + `/themes`, dataPost/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
        
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          
          commit('SET_THEME', data);
        } else {
          console.log(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    async updateTheme({ commit }: any, form: IFormUpdateTheme) {

      try {
        const dataPost = themeConverter.toUpdateThemeFormDto(form);
        const response = await axios.put(getBaseUrlApi() + `/themes/${form.id}`, dataPost/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_THEME', data);
        } else {
          console.log(responseCode);
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
