<template>
  <div>
    <nav-bar
        top-title="登录"
        :show-left="true"
        :show-right="false"
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
          <span>手机号</span>
          <div class="phone">
            <span></span>
            <input
                ref="phone-input"
                type="number"
                placeholder="请输入手机号"
                v-model="username">
            <span @click="clearPhone"></span>
          </div>
        </div>
        <div>
          <span>密码</span>
          <div class="password">
            <span></span>
            <input
                ref="password-input"
                type="password"
                placeholder="请输入密码"
                v-model="password">
            <span @click="clearPassword"></span>
          </div>
        </div>
        <span
            class="error-msg"
            ref="error-text"
        ></span>
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

import {userLoginApi} from "@/api/api";
import {setLocalStorage} from "@/utils/utils";
import router from "@/router";
import resetPassword from "@/views/login/ResetPassword.vue";

export default {
  name: 'LoginIndex',
  computed: {
    resetPassword() {
      return resetPassword
    }
  },
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    // 登录请求
    async goHome() {
      const errorMsg = this.$refs["error-text"]
      if (this.username.length !== 11){
        errorMsg.innerText="手机号格式错误"
        return
      }
      if (this.password.length < 6){
        errorMsg.innerText="密码长度至少为6位"
        return
      }
      const res = await userLoginApi(this.$data)
      // 登录成功
      if (res.data) {
        console.log(res)
        setLocalStorage("token", {value: res.data})
        await router.push("/home")
        // 登录失败, 显示提示，明文显示密码
      } else {
        console.log(res)
        this.$refs['error-text'].innerText = res.msg
        this.$refs["password-input"].type = "text"
      }
    },
    // 清除密码
    clearPassword() {
      this.password = ""
      this.$refs['error-text'].innerText = ""
      this.$refs["password-input"].focus()
      this.$refs["password-input"].type = "password"
    },
    // 清除手机号
    clearPhone() {
      this.username = ""
      this.password = ""
      this.$refs['error-text'].innerText = ""
      this.$refs["phone-input"].focus()
    }
  }
}
</script>

<style scoped lang="less">
.title {
  h3 {
    margin-top: 20px;
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
  border-radius: 20px;
  background-color: #333333;

  span {
    display: block;
    background-color: #333333;
    font-size: 16px;
    //margin: 20px 0 15px 0;
  }

  .phone {
    display: flex;

    span {

      display: inline-block;
      width: 10%;
      height: 35px;
      margin: 20px 0 20px 0;
      background-color: #fff;
      color: #000000;
      text-align: center;
      line-height: 35px;
      font-family: iconfont, serif;
      font-size: 18px;

      &:nth-child(1) {
        border-radius: 10px 0 0 10px;

        &:after {
          content: "\e639";
          font-family: iconfont, serif;
        }
      }

      &:last-child {
        border-radius: 0 10px 10px 0;

        &:after {
          content: "\e608";
        }
      }
    }
  }

  .password {
    display: flex;

    span {
      margin: 20px 0 20px 0;
      display: inline-block;
      background-color: #fff;
      color: #000000;
      width: 10%;
      height: 35px;
      line-height: 35px;
      text-align: center;
      font-family: iconfont, serif;
      font-size: 18px;

      &:nth-child(1) {
        border-radius: 10px 0 0 10px;

        &:after {
          content: "\e8b2";
          font-family: iconfont, serif;
        }
      }

      &:last-child {
        border-radius: 0 10px 10px 0;

        &:after {
          content: "\e608";
        }
      }
    }
  }

  input {
    border-radius: 0;
    box-sizing: border-box;
    width: 80%;
    height: 35px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
    color: #333333;
    margin: 20px 0 20px 0;
  }

  button {
    color: #ffffff;
    margin-top: 10px;
    display: block;
    height: 35px;
    width: 100%;
    border: 0;
    border-radius: 15px;
    background-color: #000000;
  }

  .error-msg {
    font-size: 14px;
    color: red;
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