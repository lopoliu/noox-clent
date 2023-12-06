<template>
  <div>
    <div>
      <nav-bar
          :show-back="true"
          :show-avatar="false"
          top-title="忘记密码"
      ></nav-bar>
    </div>
    <div class="reset w">
      <h3>忘记密码</h3>
      <div class="container">
        <div>
          <span>手机号</span>
          <input type="number" placeholder="请输入手机号">
        </div>
        <div>
          <span>验证码</span>
          <div class="sms">
            <input type="number" placeholder="请输入验证码">
            <button>获取验证码</button>
          </div>
        </div>
        <div>
          <span>新密码</span>
          <input type="password" placeholder="请输入密码">
        </div>
        <div>
          <span>确认密码</span>
          <input type="password" placeholder="请再次输入密码">
        </div>
        <div>
          <button>确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResetPassword"
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