<template>
  <div id="app">
    <!-- keep-aline 便签避免反复发送异步请求 使用缓存数据-->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
</style>
