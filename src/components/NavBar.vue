<template>
  <div class="nav">
    <div class="top">
      <div class="back">
        <span
            v-if="showBack"
            @click="clickBack"
        >返回</span>
      </div>
      <div class="top-title">
        <slot name="title">{{ topTitle }}</slot>
      </div>
      <div v-if="showAvatar"
          class="avatar"
          @click="clickAvatarHandler"
      ><span>金额</span>
        <img src="https://himg.bdimg.com/sys/portrait/item/public.1.a85bfe5e.x0ZhYqSveqrAQaTSwjdMvA.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "NavBar",
  data() {
    return {
      avatarImg: 'https://himg.bdimg.com/sys/portrait/item/public.1.a85bfe5e.x0ZhYqSveqrAQaTSwjdMvA.jpg',
    }
  },
  props: {
    topTitle: String,
    showBack: Boolean,
    showAvatar: Boolean
  },
  methods: {
    // 点击头像
    clickAvatarHandler() {
      if (router.currentRoute.fullPath !== '/login') {
        router.push("/login")
      }
    },
    // 处理返回
    clickBack() {
      router.back()
    },
  },
  mounted() {
    // console.log(this.showAvatar)
  }
}
</script>

<style scoped lang="less">
.nav {
  height: 50px;
  width: 100%;
  position: relative;
  //margin-bottom: 15px;
  .top {
    position: fixed;
    z-index: 1;
    height: 50px;
    width: 100%;
    display: flex;
    background-color: #000000;
    border-bottom: 1px #343434 solid;

    div {
      box-sizing: border-box;
    }

    .back {
      width: 25%;
      line-height: 50px;
      padding-left: 20px;

      span {
        &:before {
          font-family: iconfont, Avenir, AppleSystemUIFont, serif;
          content: "\e600";
          color: white;
        }
      }

    }

    .top-title {
      width: 50%;
      line-height: 50px;
      text-align: center;
    }

    .avatar {
      width: 25%;
      display: flex;
      padding-right: 15px;
      align-items: center;
      justify-content: space-around;

      img {
        width: 34px;
        height: 34px;
        border-radius: 17px;
      }
    }
  }
}
</style>