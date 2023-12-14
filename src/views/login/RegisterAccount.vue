<template>
  <div>
    <div>
      <dialog-comp :show-dialog="showDialog" :show-cancel="false">
        <template v-slot:context>
            <div>恭喜,账号注册成功</div>
        </template>
        <template v-slot:operation>
          <div>
            <router-link to="/login">前往登录</router-link>
          </div>
        </template>
      </dialog-comp>
      <nav-bar
          :show-left="true"
          :show-right="false"
          topTitle="注册"
      ></nav-bar>
    </div>
    <div class="register w">
      <h3>注册账户</h3>
      <span class="slogan">完成注册赠送199积分</span>
      <div class="container">
        <div>
          <span>手机号</span>
          <input v-model="phone" type="number" placeholder="请输入手机号">
        </div>
        <span>验证码</span>
        <div class="sms">
          <input v-model="smsCode" type="number" placeholder="请输入验证码">
          <button ref="sms-code-button" @click="getSmsCode">获取验证码</button>
        </div>
        <div>
          <span>密码</span>
          <input v-model="password" type="password" placeholder="请输入密码">
        </div>
        <div>
          <span>确认密码</span>
          <input v-model="rePassword" type="password" placeholder="确认密码">
        </div>
        <span ref="error-msg" class="error-msg"></span>
        <div>
          <button @click="register">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {userRegisterApi} from "@/api/api";

export default {
  name: "RegisterAccount",
  data(){
    return{
      phone: null,
      smsCode: null,
      password: null,
      rePassword: null,
      showDialog: false
    }
  },
  methods: {
    getSmsCode: function () {
      // 再次发送验证码倒计时
      let time = 60

      // 手机号为空
      if (this.phone === null){
        this.$refs["error-msg"].innerText = "手机号不能为空"
        return;
      }

      // 手机号格式错误
      if (this.phone.length !== 11){
        this.$refs["error-msg"].innerText = "手机号格式错误"
        return
      }
      // 获取button节点
      const button = document.querySelector("button")

      // 开启计时
      const timer = setInterval(()=>{
        // 禁用button
        button.disabled = true

        time--;
        button.innerText = time.toString()
        if (time < 1){
          // 清除计时器
          clearInterval(timer)
          button.disabled=false
          button.innerText = "获取验证码"
        }
      }, 1000)
    },
    register: async function () {
      // 手机号为空
      if (this.phone === null){
        this.$refs["error-msg"].innerText = "手机号不能为空"
        return;
      }

      // 手机号格式正确
      if (this.phone.length !== 11){
        this.$refs["error-msg"].innerText = "手机号格式错误"
        return
      }
      // 验证码格式错误
      if (this.smsCode === null || this.smsCode.length !== 6){
        this.$refs["error-msg"].innerText = "验证码长度必须是6位数字"
        return
      }
      // 密码格式错误
      if (this.password.length < 6){
        this.$refs["error-msg"].innerText = "密码长度至少是6位"
        return;
      }
      // 两次密码输入不一致
      if (this.rePassword !== this.password){
        this.$refs["error-msg"].innerText = "两次密码输入不一致"
        return;
      }
      const res = await userRegisterApi(this.$data)
      // 如果返回值包含数据
      if (res.code === 200){
        // 跳转到登录页面
        this.showDialog = true
      }else {
        // 渲染错误信息
        this.$refs["error-msg"].innerText = res.msg
      }
    }
  },
  destroyed() {
  }
}
</script>

<style scoped lang="less">
.slogan{
  display: block;
  color: #9a9a9a;
  margin-bottom: 30px;
}
.error-msg{
  color: red;
}
.register {
  h3 {
    margin-top: 35px;
    font-size: 32px;
    font-weight: 700;
  }

  .container {
    box-sizing: border-box;
    width: 100%;
    padding: 30px;
    border-radius: 15px;
    background-color: #333333;

    span {
      display: block;
    }

    input {
      width: 100%;
      height: 35px;
      margin: 10px 0;
      padding-left: 10px;
      border-radius: 10px;
      font-size: 16px;
    }
    button{
      width: 100%;
      height: 35px;
      color: #ffffff;
      border: 0;
      background-color: #000000;
      border-radius: 10px;
    }
    .sms{
      display: flex;
      justify-content: space-between;
      input{
        width: 60%;
      }
      button{
        margin: 10px 0;
        width: 30%;
      }
    }
  }
}
</style>