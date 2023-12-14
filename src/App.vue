<template>
  <div id="app">
<!--    <dialog-comp :show-cancel="true">-->
<!--      <template v-slot:operation>-->
<!--        <div><router-link to="/login">前往登录</router-link></div>-->
<!--      </template>-->
<!--    </dialog-comp>-->
    <keep-alive include="HomeIndex"><router-view/></keep-alive>
  </div>
</template>

<style>
#app {
}

</style>
<script setup>
// import DialogComp from "@/components/DialogComp.vue";
</script>