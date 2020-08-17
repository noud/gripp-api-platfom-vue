import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';
import tag from './store/modules/tag/';
import tagRoutes from './router/tag';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  modules: {
    tag,
  }
});

const router = new VueRouter({
  mode: 'history',
  routes: [
      ...tagRoutes,
  ]
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
