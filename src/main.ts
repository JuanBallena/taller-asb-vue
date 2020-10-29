import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

// fetch(process.env.BASE_URL + "config.json")
//   .then(async function(response) {
//     const config = await response.json()
//     Vue.prototype.$config = config
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.component('TitleComponent', require('./components/title.vue').default);
Vue.component('SubtitleComponent', require('./components/subtitle.vue').default);
Vue.component('ItemListComponent', require('./components/item_list.vue').default);
Vue.component('RoundedButtonColorComponent', require('./components/rounded_button_color.vue').default);
Vue.component('ActionIconComponent', require('./components/action_icon.vue').default);
Vue.component('SearchInputComponent', require('./components/search_input.vue').default);
Vue.component('ChipComponent', require('./components/chip.vue').default);
Vue.component('RoundedButtonComponent', require('./components/rounded_button.vue').default);
Vue.component('ContactSupportComponent', require('./components/contact_support.vue').default);