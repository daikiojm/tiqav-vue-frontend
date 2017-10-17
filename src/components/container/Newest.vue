<template>
<div class="_wapper">
  <p>Newest</p>
  <app-images v-bind:input-images="results"></app-images>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import Images from './../shared/Images'

Vue.component('app-images', Images)

export default {
  data () {
    return {
      results: ''
    }
  },
  created: function () {
    const resourceUrl = process.env.API_ENDPOINT + '/search/random.json'
    const config = { adapter: jsonpAdapter }
    axios.get(resourceUrl, config)
      .then((res) => {
        this.results = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
._wapper {
  margin: 20px 10%;
}
</style>
