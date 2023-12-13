import Vue from 'vue'
import App from './App.vue'
import router from './router'
import("@/assets/main.css")
import "@/assets/font/iconfont.css";
import VueClipBoard from 'vue-clipboard2'//一键复制

Vue.config.productionTip = false

Vue.use(VueClipBoard)
Vue.component(
    'nav-bar', ()=>import("@/components/NavBar.vue"),
)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

