<template>
  <div>
    <div class="nav-bar-container">
      <nav-bar
          :show-back="false"
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

export default {
  name: "HomeIndex",
  data(){
    return{
      videoList:[
        {
          id: 1, title: "这个杀手不太冷",
          imgUrl: "https://st-gdx.dancf.com/gaodingx/89/articles/0/20200715-101838-1ac7.png",
          amount: {
            down: 1000, amount: 99.9, updateDate: "2022-12-32"
          }
        },
        {
          id: 2, title: "这个杀手不太冷",
          imgUrl: "https://st-gdx.dancf.com/gaodingx/89/articles/0/20200715-101838-1ac7.png",
          amount: {
            down: 1000, amount: 99.9, updateDate: "2022-12-32"
          }
        }
      ]
    }
  },
  components: {
    // NavBar,
    // TopBar,
    BannerComp,
    VideoItem
  },
  methods:{
    clickItem(id){
      this.$router.push("/detail/" + id)
    }
  }
}

</script>

<style scoped lang="less">
.nav-bar-container{
  margin-bottom: 15px;
}
</style>