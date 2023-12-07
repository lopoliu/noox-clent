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
      <div class="avatar"
           v-if="showAvatar"
           @click="clickAvatarHandler"
      ><span>19999</span>
        <img src="https://himg.bdimg.com/sys/portrait/item/public.1.a85bfe5e.x0ZhYqSveqrAQaTSwjdMvA.jpg" alt="">
      </div>
      <div  v-show="disableMenu">
        <div class="menu">
          <ul>
            <li>
              <router-link to="/exchange">我的积分</router-link>
            </li>
            <li>
              <router-link to="/exchange">兑换积分</router-link>
            </li>
            <li>
              <span>我的视频</span>
            </li>
            <li @click="clickAvatarHandler">
              <span>关闭</span>
            </li>
          </ul>
          <div class="close-menu">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import {getLocalStorage} from "@/utils/utils";

export default {
  name: "NavBar",
  data() {
    return {
      disableMenu: false,
      menuNode: "",
      avatarImg: 'https://himg.bdimg.com/sys/portrait/item/public.1.a85bfe5e.x0ZhYqSveqrAQaTSwjdMvA.jpg',
    }
  },
  props: {
    topTitle: String,
    showBack: Boolean,
    showAvatar: Boolean,
  },
  methods: {
    // 点击头像
    clickAvatarHandler() {
      const token = getLocalStorage('token')
      if (token === null) {
        router.push("/login")
      }else {
        this.disableMenu = !this.disableMenu
      }
    },
    // 处理返回
    clickBack() {
      router.back()
    },
    //
  },
  mounted() {
  }
}
</script>

<style scoped lang="less">
.nav {
  height: 50px;
  width: 100%;
  position: relative;
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
    .menu {
      position: absolute;
      box-sizing: border-box;
      right: 5px;
      top: 50px;
      width: 140px;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.9);
      text-align: center;
      overflow: hidden;
      li{
        padding: 10px 0;
        border-bottom: 1px #343434 solid;
        &:last-child{
          border-bottom: 0;
          color: red;
        }
      }
      a{
        color: #ffffff;
      }
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
      box-sizing: border-box;
      display: flex;
      padding-right: 15px;
      align-items: center;
      justify-content: space-around;
      img {
        width: 34px;
        height: 34px;
        border-radius: 17px;
      }
      span{
        font-size: 12px;
        color: greenyellow;
        &:before{
          font-family: iconfont, serif;
          content: "\e601  ";
        }
      }
    }
  }
}


</style>