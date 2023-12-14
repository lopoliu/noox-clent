<template>
  <div>
    <div>
      <nav-bar
      :show-left="true"
      :show-right="true"
      top-title="兑换码"
      ></nav-bar>
    </div>
    <div class="exchange w">
      <h3>使用兑换码</h3>
      <div>
      <pre>
   _____  ___      ______      ______  ___  ___
  (\"   \|"  \    /    " \    /    " \|"  \/"  |
  |.\\   \    |  // ____  \  // ____  \\   \  /
  |: \.   \\  | /  /    ) :)/  /    ) :)\\  \/
  |.  \    \. |(: (____/ //(: (____/ // /\.  \
  |    \    \ | \        /  \        / /  \   \
   \___|\____\)  \"_____/    \"_____/ |___/\___|
      </pre>
      </div>
      <div class="container">
        <div>
          <span>兑换码</span>
          <input type="text" placeholder="请输入兑换码">
        </div>
        <div>
          <button>确认兑换</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExchangeIndex"
}
</script>

<style scoped lang="less">
.exchange {
  pre{
    font-family: monospace;
    font-size: 12px;
  }
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
      color: #101010;
    }

    button {
      width: 100%;
      height: 35px;
      margin: 20px 0 0 0;
      color: #ffffff;
      border: 0;
      background-color: #000000;
      border-radius: 10px;
    }
  }
}

</style>