<template>
<div class="nav">
  <div class="top">
    <div class="back">
      <span @click="clickBack" :class="{disable: !showBack}">返回</span>
    </div>
    <div class="top-title">
      <slot name="title">{{ topTitle }}</slot>
    </div>
    <div class="avatar">
      <img src="https://himg.bdimg.com/sys/portrait/item/public.1.a85bfe5e.x0ZhYqSveqrAQaTSwjdMvA.jpg" alt="">
      <span>金额</span>
    </div>
  </div>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "NavBar",
  data(){
    return{
      avatarImg: 'https://himg.bdimg.com/sys/portrait/item/public.1.a85bfe5e.x0ZhYqSveqrAQaTSwjdMvA.jpg',
    }
  },
  props:{
    topTitle:String,
    showBack: Boolean
  },
  methods:{
    // 点击头像
    clickAvatarHandler(){
      if (router.currentRoute.fullPath !== '/login'){
        router.push("/login")
      }
    },
    // 处理返回
    clickBack(){
      router.back()
    }
  },
}
</script>

<style scoped lang="less">
.nav{
  height: 50px;
  width: 100%;
  position: relative;
  .top{
    position: fixed;
    z-index: 1;
    height: 50px;
    width: 100%;
    display: flex;
    background-color: #000000;
    border-bottom: 1px #343434 solid;
    div{
      box-sizing: border-box;
    }
    .back{
      width: 25%;
      line-height: 50px;
      padding-left: 20px;

      span {
        &:before {
          font-family: iconfont, Avenir, AppleSystemUIFont, serif;
          content: "\e600";
          color: white;
        }}

    }
    .top-title{
      width: 50%;
      line-height: 50px;
      text-align: center;
    }
    .avatar{
      width: 25%;
      display: flex;
      padding-right: 20px;
      align-items: center;
      justify-content: space-around;
      img{
        width: 34px;
        height: 34px;
        border-radius: 17px;
      }
    }
  }
}
</style>