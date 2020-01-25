import Vue from 'vue'
import router from './router'
import App from './App.vue'
import lodash from 'lodash'
import './components'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

//Vue.use(VueRouter);

new Vue({
  lodash,
  router,
  vuetify,
  icons: {
    iconfont: 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  },
  render: h => h(App)
}).$mount('#app')
