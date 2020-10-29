import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primaryColor: '#DC5648',
        secondaryColor: '#63595A',
        accentColor: '#F3F3F3',
        successColor: '#2DD2B0',
        dangerColor: '#DC5648',
        //error: '#FF5252',
        //info: '#2196F3',
        
        //warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
