<template>
  <div class="detail">
    <nav-bar
        :show-left="true"
        :show-right="true"
        top-title="详情"
    ></nav-bar>
    <div class="tips">
      <span>
        所有链接仅支持讯雷云盘下载，资源经过特殊处理，无需vip既可高速下载，购买后资源在3天内有效，请尽快下载保存到手机或电脑！！！
      </span>
    </div>
    <div class="title">
      <span>
        {{this.videoDetail.title}}
      </span>
    </div>
    <div class="amount">
      <span class="first-span">{{videoDetail.downCount}}</span>
      <span>{{videoDetail.duration}}</span>
      <span>{{videoDetail.price}}</span>
      <span>{{videoDetail.tag}}</span>
    </div>

    <div class="img-items">
      <ul>
        <li v-for="(item, index) in videoDetail.images" :key="index">
          <img :src="'http://192.168.0.110/images/'+item" alt="">
        </li>
      </ul>
    </div>
    <div class="footer">
      <div class="doc">《下载教程》</div>
      <button class="buy" @click="buy">
        <span>积分: {{videoDetail.price}}</span>
        <span>复制下载连接</span>
      </button>
    </div>
    <div class="end">
      没有更多了~~~~~~
    </div>
  </div>
</template>

<script>

import {videoDetail} from "@/api/api";
import {getLocalStorage} from "@/utils/utils";

export default {
  name: "VideoIndex",
  data() {
    return {
      videoDetail: "",
    }
  },
  computed: {
  },
  created() {
    this.reqVideoDetail(this.$route.params.id)
  },
  methods: {
    async reqVideoDetail(res_id) {
      const res = await videoDetail(res_id)
      if (res.data) {
        this.videoDetail = res.data
      }
    },
    copyText(text){
      this.$copyText(text).then(
          function () {
            console.log("复制成功")
          }
      ).catch(
          function (e){
            alert(e)
          }
      )
    },
    async buy(){

      const token = getLocalStorage("token")
      if (token === null || token === undefined || token === ""){
        this.$router.push("/login")
        return
      }
      if (this.videoDetail.btlink === null){
        // const res = await videoBuy(parseInt(this.$route.params.id))
        console.log("请求支付")
        return
      }
      this.copyText(this.videoDetail.btlink)
    }
  }
}
</script>
<style scoped lang="less">
.detail {
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
    content: "\e63d";
  }

}

.tips span {
  background-color: #FCCA00;
  color: #333333;
  font-size: 14px;
}

.title {
  font-size: 20px;
  margin: 10px auto;
}

.img-items {
  img {
    width: 100%;
    //height: 180px;
    height: 100%;
    border-radius: 10px;
    margin: 10px 0;
  }
}

.footer {
  display: flex;
  height: 50px;
  width: 100%;
  background-color: #343434;
  position: fixed;
  bottom: 0;
  text-align: center;

  div {
    line-height: 50px;
  }

  .doc {
    flex: 1;
    color: #8585ea;
  }

  .buy {
    display: flex;
    box-sizing: border-box;
    width: 140px;
    height: 50px;
    background-color: #101010;
    flex-direction: column;
    align-items: center;
    padding: 2px 0;

    span:nth-child(1) {
      color: greenyellow;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
    }

    span:nth-child(2) {
      font-size: 16px;
      height: 30px;
      line-height: 30px;
    }
  }
}

.end {
  text-align: center;
  height: 50px;
}
</style>