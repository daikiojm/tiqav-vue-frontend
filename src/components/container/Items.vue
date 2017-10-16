<template>
<div class="_wapper">
  <p>Items</p>
  <el-card class="box-card">
    <p>{{this.$route.params.id}}</p>
  </el-card>

</div>
</template>

<script>
// import Vue from 'vue'
// import axios from 'axios'
// import jsonpAdapter from 'axios-jsonp'

export default {
  data () {
    return {
      results: ''
    }
  },
  created: function () {
    let id = this.$route.params.id
    console.log(id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
._wapper {
  margin: 20px 10%;
}
</style>
