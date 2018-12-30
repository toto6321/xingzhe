import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAUBNBnZojn7ExRqMjQr3B9iqe7yxlhjiA',
        libraries: 'places,drawing,visualization'
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');
