import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import * as VueGoogleMaps from 'vue2-google-maps'

import {key} from './config/google_map'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueGoogleMaps, {
  load: {
    key: key,
    libraries: 'places,drawing,visualization'
  }
});

Vue.config.devtools = process.env.NODE_ENV === 'development';

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
