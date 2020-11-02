import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { IParameter } from "@/interfaces/parameter_interfaces";
import { Parameter } from "@/models/Parameter";
import * as parameterConverter from "@/converter/parameter_converter";

export default {

  namespaced: true,

  state: {
    parameterList1: [] as Parameter[],
    parameterList2: [] as Parameter[],
    
  },

  mutations: {
    SET_PARAMETER_LIST_1(state: { parameterList1: Parameter[] }, data: IParameter[]) {

      data.forEach((parameter) => {
        state.parameterList1.push(parameterConverter.toParameterModel(parameter));
      });
    },

    SET_PARAMETER_LIST_2(state: { parameterList2: Parameter[] }, data: IParameter[]) {
      
      data.forEach((parameter) => {
        state.parameterList2.push(parameterConverter.toParameterModel(parameter));
      });
    },

    RESET_PARAMETER_LIST_1(state: { parameterList1: Parameter[] }) {
      state.parameterList1 = [];
    },

    RESET_PARAMETER_LIST_2(state: { parameterList2: Parameter[] }) {
      state.parameterList2 = [];
    }
  },

  actions: {
    async getParameterList1({ commit }: any, parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/parameters${ parameters }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
  
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_PARAMETER_LIST_1', data);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },

    async getParameterList2({ commit }: any, parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/parameters${ parameters }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
  
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_PARAMETER_LIST_2', data);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },
  },

}
