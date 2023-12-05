<template>
  <div class="item" @click="toDetail">
    <div class="video-img">
      <img :src=videoItem.imgUrl alt="">
    </div>
    <div class="video-info">
      <div class="video-title">
        <h3>{{ videoItem.title }}</h3>
      </div>
      <div class="video-amount">
        <span>{{ videoItem.amount.down }}</span>
        <span>{{ videoItem.amount.updateDate }}</span>
        <span>{{ videoItem.amount.amount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: 'VideoItem',
  data() {
    return {
      videoItem: {
        id: 1, title: "这个杀手不太冷",
        imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F14%2F20200414220017_YaCJE.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1704265144&t=a0e95ea4bfdf40dd90490d52d79322e0",
        amount: {
          down: 1000, amount: 99.9, updateDate: "2022-12-32"
        }
      }
    }
  },
  methods: {
    toDetail: () => {
      router.push('/detail')
      // console.log(this.videoItem.id)
    }
  }
}

</script>

<style scoped lang="less">
.item {
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  border: 1px solid #343434;
  border-radius: 15px;
  overflow: hidden;

  .video-img {
    width: 160px;

    img {
      width: 100%;
      height: 100px;
    }
  }

  .video-info {
    box-sizing: border-box;
    flex: 1;
    padding: 5px;

    .video-title {
      height: 40px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      display: -webkit-box;

      h3 {
        margin: 0;
        font-weight: 400;
        font-size: 15px;
      }
    }

    .video-amount {
      display: flex;
      justify-content: space-around;
      height: 55px;
      font-size: 14px;
      line-height: 55px;
      text-align: center;

      span:nth-child(1)::before {
        font-family: iconfont, serif;
        content: "\e823";
        color: #ffffff;
      }

      span:nth-child(2)::before {
        font-family: iconfont, serif;
        content: "\ebb3";
        color: #ffffff;
      }

      span:nth-child(3)::before {
        font-family: iconfont, serif;
        content: "\e601";
        color: #ffffff;
      }
    }
  }
}
</style>