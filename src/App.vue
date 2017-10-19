<template>
  <div id="app">
    <app-header></app-header>
    <div class="main-area-container">
      <router-view/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
export default {
  name: 'app'
}
Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-area-container {
  width: 100%;
  min-height: calc(100vh - 200px);
}
app-footer {
  width: 100%;
  position: relative;
  bottom: 0;
}
</style>
