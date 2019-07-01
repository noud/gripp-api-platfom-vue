import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';

// Replace "tag" with the name of the resource type
import tag from './store/modules/tag/';
import tagRoutes from './router/tag';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  modules: {
    tag
  }
});

const router = new VueRouter({
  mode: 'history',
  routes: [
      ...tagRoutes
  ]
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
