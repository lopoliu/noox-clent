<script>
export default {
  name: "ToastComp"
}
</script>

<template>
  <div>
    <div class="toast">余额不足</div>
  </div>
</template>

<style scoped lang="less">
.toast{
  position: fixed;
  z-index: 9999;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%);
  background-color: red;
  border: 1px;
}
</style>