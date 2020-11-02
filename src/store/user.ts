import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { responseCodeOk } from "@/api/response_code";
import { User } from "@/models/User";
import { IUser, IFormCreateUser, IFormUpdateUser } from "@/interfaces/user_interfaces";
import * as userConverter from "@/converter/user_converter";

export default {

  namespaced: true,

  state: {
    userList: [] as User[],
    totalPages: -1,
    user: User,
  },

  mutations: {
    SET_USER_LIST(state: { userList: User[] }, users: IUser[]) {
      state.userList = [];

      users.forEach((user) => {
        const userModel = userConverter.toUserModel(user);
        state.userList.push(userModel);
      });
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {
      state.totalPages = pages;
    },

    SET_USER(state: { user: User }, user: IUser) {
      state.user = userConverter.toUserModel(user);
    },
  },

  actions: {
    async getUserList({ commit }: any, parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/users${ parameters }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
  
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          const pages = response.data['pages'];
          commit('SET_USER_LIST', data);
          commit('SET_TOTAL_PAGES', pages);
        } else {
          alert(responseCode);
        }
      } catch(error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    async getUser({ commit }: any, idUser: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/users/${ idUser }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_USER', data);
        } else {
          alert(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    async saveUser({ commit }: any, form: IFormCreateUser) {

      try {
        const dataPost = userConverter.toCreateUserFormDto(form);
        const response = await axios.post(getBaseUrlApi() + `/users`, dataPost/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
        
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          
          commit('SET_USER', data);
        } else {
          console.log(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    async updateUser({ commit }: any, form: IFormUpdateUser) {

      try {
        const dataPost = userConverter.toUpdateUserFormDto(form);
        const response = await axios.put(getBaseUrlApi() + `/users/${form.id}`, dataPost/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];

        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_USER', data);
        } else {
          console.log(responseCode);
        }
      } catch (error) {
        checkResponseStatusCode(error.response.status);
      }
    },

    resetUserList({commit}: any) {
      commit('SET_USER_LIST', []);
    },

    resetTotalPages({commit}: any) {
      commit('SET_TOTAL_PAGES', -1);
    },

    resetUser({commit}: any) {
      commit('SET_USER', null);
    }
  },

}
