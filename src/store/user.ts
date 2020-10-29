import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { responseCodeOk } from "@/api/response_code";
import { User } from "@/models/User";

export default {

  namespaced: true,

  state: {
    userList: [] as User[],
    totalPages: -1,
    user: User,
  },

  mutations: {
    SET_USER_LIST(state: { userList: User[] }, users: User[]) {
      state.userList = [];

      users.forEach((user, i) => {
        const userModel = new User(
          user.id,
          user.username,
          user.role,
          user.status
        );
        state.userList.push(userModel);
      });
    },

    SET_TOTAL_PAGES(state: { totalPages: number }, pages: number) {
      state.totalPages = pages;
    },

    SET_USER(state: { user: User }, user: User) {
      const userModel = new User(
        user.id,
        user.username,
        user.role,
        user.status
      );
      state.user = userModel;
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
