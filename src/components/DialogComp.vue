<script>
export default {
  name: "DialogComp",
  props:{
    showDialog: Boolean,
    showCancel: Boolean,
    data: Object
  }
}
</script>

<template>
<div>
  <div v-if="showDialog" class="dialog">
    <div class="container">
      <div class="title">提示</div>
      <div class="context">
        <slot name="context" :item="this.data"></slot>
      </div>
      <div class="operation">
        <slot name="operation"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
.dialog{
  position: fixed;
  display: flex;
  z-index: 999;
  background-color: rgba(0,0,0,.7);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .container{
    position: relative;
    box-sizing: border-box;
    width: 300px;
    border-radius: 10px;
    background-color: #333333;
    }
    .title{
      height: 15%;
      text-align: center;
      font-weight: 600;
      line-height: 38px;
      font-size: 18px;
      border-bottom: 1px #9a9a9a solid;
    }
    .context{
      display: inline-block;
      height: 70%;
      margin: 20px 20px;
    }
    .operation{
      display: flex;
      justify-content: center;
      height: 15%;
      width: 100%;
      bottom: 0;
      div{
        border-top: 1px #9a9a9a solid;
        display: inline-block;
        text-align: center;
        line-height: 38px;
        border-right: 1px #9a9a9a solid;
        flex: 1;
        &:last-child{
          border-right: 0;
        }
      }
    }
}

</style>