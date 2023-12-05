<template>
  <div>
    <TopBar
        :show-back="true"
        top-title="详情"
    ></TopBar>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  name: "VideoIndex",
  components: {
    TopBar,
  }
}
</script >
<style scoped lang="less">

</style>