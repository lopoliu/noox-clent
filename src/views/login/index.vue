<template>
  <div>
    <nav-bar
        top-title="登录"
        :show-back="true"
        :show-avatar="false"
    ></nav-bar>
    <div class="login w">
      <div class="title">
        <h3>请登录</h3>
      </div>
      <div class="slogan">
      <span>
        你的影视管理专家
      </span>
      </div>
      <div class="form">
        <div>
          <span>用户名</span>
          <input type="number" placeholder="请输入手机号" v-model="username">
        </div>
        <div>
          <span>密码</span>
          <input type="password" placeholder="请输入密码" v-model="password">
        </div>
        <div>
          <button @click="goHome">登录</button>
        </div>
      </div>
      <div class="account">
        <div>
          <router-link to="/reset">忘记密码</router-link>
        </div>
        <div>
          <router-link to="/register">注册账号</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {userLogin} from "@/api/api";

export default {
  name: 'LoginIndex',
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods:{
    goHome(){
      // console.log(this.$data)
      const response = userLogin(this.$data)
      console.log(response)
    }
  }
}
</script>

<style scoped lang="less">
.title {
  h3 {
    margin-top: 35px;
    font-size: 32px;
    font-weight: 700;
  }
}

.slogan {
  margin-top: 40px;

  span {
    font-size: 20px;
    color: #9a9a9a;
  }
}

.form {
  box-sizing: border-box;
  margin-top: 40px;
  padding: 30px;
  height: 320px;
  border-radius: 20px;
  background-color: #333333;

  span {
    display: block;
    background-color: #333333;
    font-size: 16px;
  }

  input {
    background-color: #fff;
    box-sizing: border-box;
    height: 35px;
    padding: 0 15px;
    width: 100%;
    margin: 20px auto;
    border-radius: 15px;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
  }

  button {
    color: #ffffff;
    display: block;
    height: 35px;
    width: 100%;
    margin-top: 15px;
    border: 0;
    border-radius: 15px;
    background-color: #000000;
  }
}

.account {
  a {
    color: #ffffff;
  }

  div {
    margin-top: 30px;
  }

  div:nth-child(1) {
    float: left;
  }

  div:nth-child(2) {
    float: right;
  }
}
</style>