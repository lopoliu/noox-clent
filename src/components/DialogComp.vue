<script>
export default {
  name: "DialogComp",
  methods:{
    // 关闭对话框
    closeDialog(){
      document.querySelector(".dialog").style.display="none"
    }
  },
  props:{
    showCancel: Boolean,
    data: Object
  }
}
</script>

<template>
<div>
  <div class="dialog">
    <div class="container">
      <div @click="closeDialog" class="close"></div>
      <div class="title">确认兑换</div>
      <div class="context">
        <slot name="context" :item="this.data"></slot>
      </div>
      <div class="operation">
        <slot name="operation"></slot>
        <div v-if="showCancel"><button @click="closeDialog">取消</button></div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="less">
.dialog{
  position: fixed;
  display: none;
  z-index: 999;
  background-color: rgba(0,0,0,.7);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .container{
    position: relative;
    box-sizing: border-box;
    //padding: 10px;
    width: 300px;
    //height: 250px;
    border-radius: 10px;
    background-color: #343434;
    .close{
      position: absolute;
      right: 10px;
      top: 8px;
      &:after{
        font-family: iconfont, Helvetica, serif;
        content: "\e725";
        font-size: 20px;
        color: #ffffff;
      }
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
}

</style>