<template>
  <div>
      <div class="top">
        <div class="top-nav">
          <div class="left">
            <span v-show="showLeft" @click="clickBack">返回</span>
          </div>
          <div class="title">{{topTitle}}</div>
          <div class="right">
            <div v-show="showRight">
              <span class="amount" v-if="loginStatus">{{amount}}</span>
              <span v-else><router-link to="/login">前往登录</router-link></span>
              <span @click="switchShowList" class="more"></span>
              <div ref="list" class="list" v-show="showList" >
                <span><router-link to="/login">我的视频</router-link></span>
                <span><router-link to="/login">我的积分</router-link></span>
                <span><router-link to="/login">兑换积分</router-link></span>
                <span @click="switchShowList" style="color: red">关闭</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import router from "@/router";
import {getLocalStorage} from "@/utils/utils";
import {userAmount} from "@/api/api";


export default {
  name: "NavBar",
  data() {
    return {
      showList: false,
      loginStatus: false,
      amount: 0
    }
  },
  props: {
    topTitle: String,
    showLeft: Boolean,
    showRight: Boolean,

  },
  methods: {
    switchShowList(){
      console.log('sss')
      this.showList = !this.showList
    },
    async userAmount(){
      const token = await getLocalStorage('token')
      if (token !== null){
        const res = await userAmount()
        if (res.data){
          this.amount = res.data
        }
      }
    },
    // 处理返回
    clickBack() {
      router.back()
    },
    //
  },
  created() {
    const token = getLocalStorage('token')
    if (token !== null){
      this.loginStatus = true
      this.userAmount()
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="less">
.top{
  position: relative;
  height: 50px;
  width: 100%;
}
.top-nav{
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  line-height: 50px;
  background-color: #000000;
  border-bottom: 1px #343434 solid;
  .left{
    width: 35%;
    text-align: left;
    margin-left: 15px;
    span::before{
      font-family: iconfont, serif;
      content: "\e600";
      font-size: 16px;
    }
  }
  .title{
    width: 30%;
    text-align: center;
  }
  .right{
    width: 35%;
    text-align: right;
    margin-right: 15px;
    position: relative;
    .amount::before{
      font-family: iconfont, serif;
      content: "\e601";
    }
    .more{
      &:after{
        font-family: iconfont, serif;
        content: "\e6e4";
        font-size: 16px;
      }
    }

    .list{
      opacity: .9;
      display: flex;
      flex-direction: column;
      z-index: 3;
      position: absolute;
      top: 50px;
      right: -15px;
      text-align: center;
      border-radius: 5px;
      background-color: #000000;
      span{
        width: 150px;
        height: 50px;
        line-height: 50px;
        border-top: 1px #343434 solid;
      }
    }
  }
}
//.nav {
//  height: 50px;
//  width: 100%;
//  position: relative;
//  .top {
//
//    position: fixed;
//    z-index: 1;
//    height: 50px;
//    width: 100%;
//    display: flex;
//    background-color: #000000;
//    border-bottom: 1px #343434 solid;
//
//    div {
//      box-sizing: border-box;
//    }
//    .menu {
//      position: absolute;
//      box-sizing: border-box;
//      right: 5px;
//      top: 50px;
//      width: 140px;
//      border-radius: 5px;
//      background-color: rgba(0, 0, 0, 0.9);
//      text-align: center;
//      overflow: hidden;
//      li{
//        padding: 10px 0;
//        border-bottom: 1px #343434 solid;
//        &:last-child{
//          border-bottom: 0;
//          color: red;
//        }
//      }
//      a{
//        color: #ffffff;
//      }
//    }
//    .back {
//      width: 30%;
//      line-height: 50px;
//      padding-left: 20px;
//
//      span {
//        &:before {
//          font-family: iconfont, Avenir, AppleSystemUIFont, serif;
//          content: "\e600";
//          color: white;
//        }
//      }
//    }
//    .top-title {
//      width: 40%;
//      line-height: 50px;
//      text-align: center;
//    }
//
//    .avatar {
//      width: 30%;
//      box-sizing: border-box;
//      display: flex;
//      padding-right: 15px;
//      align-items: center;
//      justify-content: flex-end;
//      img {
//        width: 34px;
//        height: 34px;
//        border-radius: 17px;
//      }
//    }
//  }
//}
//
//.my-amount{
//  font-size: 16px;
//  &:before{
//    font-family: "iconfont", serif;
//    content: "\e601";
//    font-size: 16px;
//  }
//}

</style>