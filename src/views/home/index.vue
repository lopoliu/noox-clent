<template>
  <div>
    <div class="nav-bar-container">
      <nav-bar
          :show-back="false"
          :showAvatar="true"
          top-title="首页"
      ></nav-bar>
    </div>
    <div class="w">
      <banner-comp></banner-comp>
      <div class="video-list">
        <ul>
          <li v-for="(item, index) in videoList" :key="index" @click="clickItem(item.id)">
            <video-item :item="item"></video-item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BannerComp from "@/components/BannerComp.vue";
import VideoItem from "@/components/VideoItem.vue"
import {videoList} from "@/api/api";

export default {
  name: "HomeIndex",
  data(){
    return{
      'videoList': []
    }
  },
  created() {
    this.reqVideoLost()
  },
  components: {
    BannerComp,
    VideoItem
  },
  methods:{
    clickItem(id){
      this.$router.push("/detail/" + id)
    },
    async reqVideoLost(){
      const res = await videoList()
      if (res.data) {
        this.videoList = res.data
        // 登录失败, 显示提示，明文显示密码
      }
    }
  },
  mounted() {
    console.log(this.videoList)
  }
}

</script>

<style scoped lang="less">
.nav-bar-container{
  margin-bottom: 15px;
}
</style>