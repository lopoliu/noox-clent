<template>
  <div>
    <div class="nav-bar-container">
      <nav-bar
          :show-left="false"
          :show-right="true"
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
import {resourceListApi} from "@/api/api";

export default {
  name: "HomeIndex",
  data(){
    return{
      videoList: [],
      pageIndex: 1,
      pageSize: 10,
      nextReq: 450
    }
  },
  created() {
    this.reqVideoList()

  },
  components: {
    BannerComp,
    VideoItem
  },
  methods:{
    clickItem(id){
      this.$router.push("/detail/" + id)
    },
    async reqVideoList(){
      const res = await resourceListApi(this.$data)
      if (res.data) {
        this.videoList = res.data
        // 登录失败, 显示提示，明文显示密码
      }
    },
    async handleScroll() {
      // 当滚动到底部时加载更多数据
      if (window.scrollY > this.nextReq){
        this.nextReq += window.innerHeight + 40;
        setTimeout(()=>{}, 1000)
        this.pageIndex ++;
        const res = await resourceListApi(this.$data)
        if (res.data){
          this.videoList.push(...res.data)
        }
        if (res.data < this.pageSize){
          this.nextReq = null
        }
      }
    }
  },
  mounted() {
    addEventListener("scroll", this.handleScroll)
  }
}

</script>

<style scoped lang="less">
.nav-bar-container{
  margin-bottom: 15px;
}
</style>