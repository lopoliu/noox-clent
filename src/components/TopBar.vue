<template>
    <div class="top-bar">
      <div class="w">
      <span class="back">
        <span @click="clickBack" :class="{disable: !showBack}">返回</span>
      </span>
        <span class="title">
        <slot name="title">{{ topTitle }}</slot>
      </span>
        <span class="avatar" @click="clickAvatarHandler">
        <div ref="avatar" class="container">
          <span>未登录</span>
          <img :src="avatarImg" alt="avatar">
        </div>
      </span>
      </div>
    </div>

  <!--  </div>-->
</template>

<script>

import router from "@/router";

export default {
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
.top-bar {
  height: 50px;
  border-bottom: 2px solid #343434;

  .w {
    display: flex;
    justify-content: space-between;

    span {
      line-height: 50px;
    }

    .back {
      width: 33.33%;
      text-align: left;

      span {
        &:before {
          font-family: iconfont, Avenir, AppleSystemUIFont, serif;
          content: "\e600";
          color: white;
        }
      }
    }

    .title {
      width: 33.33%;
      text-align: center;
    }

    .avatar {
      width: 33.33%;

      .container {
        display: flex;
        justify-content: right;
        align-items: center;

        span {
          font-size: 14px;
          margin-right: 8px;
        }

        img {
          border-radius: 17px;
          width: 34px;
          height: 34px;
          vertical-align: top;
        }
      }

    }

  }
}


</style>