<template>
<div class="_wapper">
  <p>Search</p>
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
  watch: {
    '$route' (to, from) {
      let query = this.$route.query.q
      if (query) {
        this.search(query)
      }
    }
  },
  created: function () {
    let searchWord = 'ちくわぶ'
    if (this.$route.query.q) { searchWord = this.$route.query.q }
    this.search(searchWord)
  },
  methods: {
    search (word) {
      const resourceUrl = 'http://api.tiqav.com/search.json?q=' + word
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
._wapper {
  margin: 20px 10%;
}
</style>
