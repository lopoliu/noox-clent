<template>
  <div>
    <div>
      <nav-bar
          :show-back="true"
          :show-avatar="false"
          topTitle="注册"
      ></nav-bar>
    </div>
    <div class="register w">
      <h3>注册账户</h3>
      <span class="slogan">完成注册赠送199积分</span>
      <div class="container">
        <div>
          <span>手机号</span>
          <input type="number" placeholder="请输入手机号">
        </div>
        <span>验证码</span>
        <div class="sms">
          <input type="number" placeholder="请输入验证码">
          <button>获取验证码</button>
        </div>
        <div>
          <span>密码</span>
          <input type="password" placeholder="请输入密码">
        </div>
        <div>
          <span>确认密码</span>
          <input type="password" placeholder="确认密码">
        </div>
        <div>
          <button>注册</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterAccount"
}
</script>

<style scoped lang="less">
.slogan{
  display: block;
  color: #9a9a9a;
  margin-bottom: 30px;
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
      margin: 10px 0;
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
        width: 30%;
      }
    }
  }
}
</style>