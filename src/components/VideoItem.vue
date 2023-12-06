<template>
  <div class="item">
    <div class="video-img">
      <img :src=item.imgUrl alt="">
    </div>
    <div class="video-info">
      <div class="video-title">
        <h3>{{ item.title }}</h3>
      </div>
      <div class="video-amount">
        <span>{{ item.amount.down }}</span>
<!--        <span>{{ item.amount.updateDate }}</span>-->
        <span>{{ item.amount.amount }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VideoItem',
  data() {
    return {
    }
  },
  created() {
  },
  props:{
    item: {
      type: Object
    }
  },
  methods: {
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