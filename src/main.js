import Vue from 'vue'
import App from './App.vue'
import router from './router'
import("@/assets/main.css")

Vue.config.productionTip = false
Vue.component(
    'nav-bar', ()=>import("@/components/NavBar.vue"),
)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

