<script>

export default {
  name: "BannerComp",
  data(){
    return{
      currentIndex: 0,
      timer: null,
      imgList: [
        "https://img.zcool.cn/community/0137be5a5a28dca80120121f8114bc.gif",
        "https://img.zcool.cn/community/01ab865ef9b9b4a80120662137a9c0.jpg@2o.jpg",
        "https://img.zcool.cn/community/01675859a696f0a8012028a9acdf3f.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100"
      ]
    }
  },
  mounted() {
    this.timer=setInterval(()=>{
      if (this.currentIndex === this.imgList.length-1){
        this.currentIndex = 0

      }else {
        this.currentIndex++
      }
    }, 2000);
  },
  destroyed() {
    clearInterval(this.timer)
  }
}

</script>

<template>
<div>
  <div class="banner">
    <img :src="imgList[currentIndex]" alt="">
    <div>
      <ul class="indicator">
        <li
            v-for="(item, index) in imgList"
            :key="index"
            class="dot"
            :class="{'indicator-selected': currentIndex===index}"
        ></li>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
.banner{
  position: relative;
  //margin-top: 15px;
  height: 170px;
  border-radius: 10px;
  overflow: hidden;
  img{
    height: 170px;
    width: 100%;
  }
  // 轮播图小点
  .indicator{
    box-sizing: border-box;
    position: absolute;
    padding: 2px 8px;
    display: flex;
    height: 12px;
    left: 40%;
    background-color: rgba(0, 0,0, 0.2);
    border-radius: 5px;
    bottom: 1px;
    .dot{
      box-sizing: border-box;
      display: inline-block;
      line-height: 10px;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: rgba(0, 0,0, 0.2);
      margin: 0 4px;
    }
    .indicator-selected{
      background-color: rgba(0,0,0, 0.6);
    }
  }
}

</style>