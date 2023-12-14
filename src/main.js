import Vue from 'vue'
import App from './App.vue'
import router from './router'
import("@/assets/main.css")
import "@/assets/font/iconfont.css";
import VueClipBoard from 'vue-clipboard2' //一键复制
import VueLazyload from "vue-lazyload";


Vue.config.productionTip = false

Vue.use(VueClipBoard)
Vue.use(VueLazyload)
Vue.component(
    'nav-bar', ()=>import("@/components/NavBar.vue"),
)
Vue.component(
    'dialog-comp', ()=>import("@/components/DialogComp.vue")
)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

