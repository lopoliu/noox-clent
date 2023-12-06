<template>
  <div class="detail">
    <nav-bar
        :show-back="true"
        :show-avatar="true"
        top-title="详情"
    ></nav-bar>
    <div class="main-img">
      <img :src="videoDetail.images[0]" alt="">
    </div>
    <div class="amount">
      <span class="first-span">1523</span>
      <span>120</span>
      <span>98.9</span>
      <span>12121</span>
    </div>
    <div class="tips">
      <span>
        所有链接仅支持讯雷云盘下载，资源经过特殊处理，无需vip既可高速下载，购买后资源在3天内有效，请尽快下载保存到手机或电脑！！！
      </span>
    </div>
    <div class="title">
      <span>
        我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题........
      </span>
    </div>
    <div class="img-items">
      <ul>
        <li>
          <img src="https://img.zcool.cn/community/0106445dc28607a801209e1f62aac3.jpg@1280w_1l_2o_100sh.jpg" alt="s">
        </li>
        <li>
          <img src="https://img.zcool.cn/community/0106445dc28607a801209e1f62aac3.jpg@1280w_1l_2o_100sh.jpg" alt="s">
        </li>
        <li>
          <img src="https://img.zcool.cn/community/0106445dc28607a801209e1f62aac3.jpg@1280w_1l_2o_100sh.jpg" alt="s">
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="doc">《下载教程》</div>
      <div class="buy">
        <span>积分: 99.8</span>
        <span>复制下载连接</span>
      </div>
    </div>
    <div class="end">
      end
    </div>
  </div>
</template>

<script>

export default {
  name: "VideoIndex",
  data() {
    return {
      "videoDetail": {
        title: "这个杀手不太冷",
        images: [
          "https://img.zcool.cn/community/01d0e6576a11870000012e7e3dec43.jpg@1280w_1l_2o_100sh.jpg"
        ]
      }
    }
  },
  components: {},
  created() {
    console.log(this.$route.params.id)
  }
}
</script>
<style scoped lang="less">
.detail{
  position: relative;
}
.main-img {
  height: 170px;

  img {
    height: 170px;
    width: 100%;
  }
}

.amount {
  display: flex;
  box-sizing: border-box;
  height: 35px;
  justify-content: space-between;
  padding: 5px;
  font-size: 14px;
  background-color: #101010;

  span {
    width: 25%;
    border-left: 1px solid #343434;
    line-height: 25px;
    text-align: center;
  }

  .first-span {
    border-left: 0
  }

  span:nth-child(1)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e823";
  }

  span:nth-child(2)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e605";
  }

  span:nth-child(3) {
    color: greenyellow;
  }

  span:nth-child(3)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e601";
  }

  span:nth-child(4)::before {
    font-family: iconfont, Helvetica, serif;
    content: "\e823";
  }
}

.tips {

  background-color: #FCCA00;
  color: #333333;
  font-size: 14px;
}
.title{
  font-size: 20px;
  margin: 10px auto;
}
.img-items{
  img{
    width: 100%;
    height: 180px;
    border-radius: 10px;
    margin: 10px 0;
  }
}
.footer{
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #343434;
  position: fixed;
  bottom: 0;
  text-align: center;
  div{
    line-height: 50px;
  }
  .doc{
      flex: 1;
    color: #8585ea;
  }
  .buy{
    display: flex;
    box-sizing: border-box;
    width: 140px;
    height: 50px;
    background-color: #101010;
    flex-direction: column;
    padding: 2px 0;

    span:nth-child(1){
      color: greenyellow;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
    }
    span:nth-child(2){
      font-size: 16px;
      height: 30px;
      line-height: 30px;
    }
  }
}
.end{
  text-align: center;
  height: 50px;
}
</style>