import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import exStudentModule from "./ex_student";
import parameterModule from "./parameter";
import roleModule from "./role";
import studentAnioModule from "./student_anio";
import studentModule from "./student";
import themeModule from "./theme";
import userModule from "./user";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    exStudentModule,
    parameterModule,
    roleModule,
    studentAnioModule,
    studentModule,
    themeModule,
    userModule
  }
})
