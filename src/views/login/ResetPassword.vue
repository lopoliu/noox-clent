<template>
  <div>
    <div>
      <dialog-comp :show-dialog="showDialog" :show-cancel="false">
        <template v-slot:context>
          <div>恭喜,密码修改成功</div>
        </template>
        <template v-slot:operation>
          <div><router-link to="/login">前往登录</router-link></div>
        </template>
      </dialog-comp>
      <nav-bar
          :show-left="true"
          :show-right="false"
          top-title="忘记密码"
      ></nav-bar>
    </div>
    <div class="reset w">
      <h3>忘记密码</h3>
      <div class="container">
        <div>
          <span>手机号</span>
          <input v-model="phone" type="number" placeholder="请输入手机号">
        </div>
        <div>
          <span>验证码</span>
          <div class="sms">
            <input v-model="code" type="number" placeholder="请输入验证码">
            <button ref="sms-code-button" @click="getSmsCode">获取验证码</button>
          </div>
        </div>
        <div>
          <span>新密码</span>
          <input v-model="password" type="password" placeholder="请输入密码">
        </div>
        <div>
          <span>确认密码</span>
          <input v-model="rePassword" type="password" placeholder="请再次输入密码">
        </div>
        <span ref="error-msg"></span>
        <div>
          <button @click="resetPassword">确认修改</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {resetPasswordApi} from "@/api/api";

export default {
  name: "ResetPassword",
  data(){
    return{
      phone: "",
      code: "",
      password: "",
      rePassword: "",
      showDialog: false
    }
  },
  methods:{
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
        console.log(this.phone)
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
    resetPassword: async function (){
      console.log(this.$data)
      const res = await resetPasswordApi(this.$data)
      console.log(res)
      if (res.code === 200){
        this.showDialog = true
      }else {
        this.$refs["error-msg"] = res.msg
      }
    }
  }
}
</script>

<style scoped lang="less">

.reset {
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

    button {
      width: 100%;
      height: 35px;
      margin: 10px 0;
      color: #ffffff;
      border: 0;
      background-color: #000000;
      border-radius: 10px;
    }

    .sms {
      display: flex;
      justify-content: space-between;

      input {
        width: 60%;
      }

      button {
        width: 30%;
      }
    }
  }
}
</style>