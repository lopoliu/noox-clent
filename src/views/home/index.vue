<template>
  <div>
    <NavBar
    :show-back="true"
    top-title="首页"
    ></NavBar>
<!--      <TopBar-->
<!--          top-title="首页"-->
<!--          :show-back="false"-->
<!--      ></TopBar>-->
    <div class="w">
        <BannerComp></BannerComp>
      <div class="video-list">
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
        <VideoItem></VideoItem>
      </div>
    </div>
  </div>
</template>
<script>
// import TopBar from "@/components/TopBar.vue";
import BannerComp from "@/components/BannerComp.vue";
import VideoItem from "@/components/VideoItem.vue"
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeIndex",
  components:{
    NavBar,
    // TopBar,
    BannerComp,
    VideoItem
  }
}

</script>

<style scoped lang="less">
</style>