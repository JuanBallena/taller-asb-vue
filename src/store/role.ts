import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { IRole } from "@/interfaces/role_interfaces";
import { Role } from "@/models/Role";
import * as roleConverter from "@/converter/role_converter";

export default {

  namespaced: true,

  state: {
    roleList: [] as Role[]
  },

  mutations: {
    SET_ROLE_LIST(state: { roleList: Role[] }, data: IRole[]) {
      
      data.forEach((role) => {
        const roleModel = roleConverter.toRoleModel(role);
        state.roleList.push(roleModel);
      });
    },

    RESET_ROLE_LIST(state: { roleList: Role[] }) {
      state.roleList = [];
    },
  },

  actions: {
    async getRoleList({ commit }: any) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/roles`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
        
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          
          commit('SET_ROLE_LIST', data);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },
  },
}
