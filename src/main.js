import Vue from 'vue';
import App from './App';
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource';
import router from './router/routes';
import store from './store/store';
import config from './validation/config';

import './assets/scss/styles.scss';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VeeValidate, config);

Vue.http.options.root = 'https://quiz-system-api.herokuapp.com/api';

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
