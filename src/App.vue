<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- element-uiのテスト -->
    <div class="block">
      <div class="block">
        <el-date-picker type="datetime" placeholder="日付の選択"></el-date-picker>
      </div>
    </div>
    <!-- element-uiのテスト -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
