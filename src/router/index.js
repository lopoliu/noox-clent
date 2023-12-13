import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    // 访问/重定向到首页
    path: "/",
    redirect: "/home"
  },
  {
    // 首页
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/')
  },
  {
    // 登录页面
    path: '/login',
    name: 'login',
    component: () => import("@/views/login")
  },
  {
    // 视频详情页
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/video')
  },
  {
    // 注册账户
    path: '/register',
    name: 'register',
    component: () => import('@/views/login/RegisterAccount.vue')
  },
  {
    // 找回密码
    path: '/reset',
    name: 'reset',
    component: () => import('@/views/login/ResetPassword.vue')
  },
  {
    // 兑换码页面
    path: '/exchange',
    name: 'exchange',
    component: () => import('@/views/exchange')
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
