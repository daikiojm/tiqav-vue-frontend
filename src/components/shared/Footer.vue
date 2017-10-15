<template>
<footer>
  <p class="logo-row">VueTiqav</p>
  <p class="license-row">
    <span>Powered by <a href="http://dev.tiqav.com">Tiqav</a>.</span>
    <span>Maintained by <a href="https://github.com/daikiojm">daikiojm</a>.</span>
  </p>
</footer>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
footer {
  height: 80px;
  padding: 10px;
  color: #ffffff;
  background-color: #354255;
}
a {
  color: #ffffff;
  text-decoration: none;
}
.logo-row {
  margin: 10px auto auto auto;
  font-size: 120%;
}
.license-row {
  margin: 10px auto auto auto;
}
</style>
