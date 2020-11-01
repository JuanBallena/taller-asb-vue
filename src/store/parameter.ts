import axios from "axios";
import { getBaseUrlApi } from "@/api/index";
import { checkResponseStatusCode } from "@/utils/response_status_http"
import { getMessageErrorResponseCode, responseCodeOk } from "@/api/response_code";
import { IParameter } from "@/interfaces/parameter_interfaces";
import { Option } from "@/models/Option";
import * as optionConverter from "@/converter/option_converter";

export default {

  namespaced: true,

  state: {
    optionList1: [] as Option[],
    optionList2: [] as Option[],
    
  },

  mutations: {
    SET_OPTION_LIST_1(state: { optionList1: Option[] }, data: IParameter[]) {
      
      data.forEach((parameter, i) => {
        const optionModel = optionConverter.toOptionModel(parameter);
        state.optionList1.push(optionModel);
      });
    },

    SET_OPTION_LIST_2(state: { optionList2: Option[] }, data: IParameter[]) {
      
      data.forEach((parameter, i) => {
        const optionModel = optionConverter.toOptionModel(parameter);
        state.optionList2.push(optionModel);
      });
    },

    RESET_OPTION_LIST_1(state: { optionList1: Option[] }) {
      state.optionList1 = [];
    },

    RESET_OPTION_LIST_2(state: { optionList2: Option[] }) {
      state.optionList2 = [];
    }
  },

  actions: {
    async getParameterList1({ commit }: any, parameters: string) {

      try {
        const response = await axios.get(getBaseUrlApi() + `/parameters${ parameters }`/*, getAuthorization()*/)
        const responseCode = response.data['responseCode'];
  
        if (responseCodeOk(responseCode)) {
          const data = response.data['data'];
          commit('SET_OPTION_LIST_1', data);
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
          commit('SET_OPTION_LIST_2', data);
        } else {
          alert(getMessageErrorResponseCode(responseCode));
        }
      } catch(e) {
        checkResponseStatusCode(e.response.status);
      }
    },
  },

}
