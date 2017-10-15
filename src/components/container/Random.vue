<template>
<div class="wapper">
  <p>Random</p>
  <p>{{ results }}</p>
</div>
</template>

<script>
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

export default {
  data () {
    return {
      results: ''
    }
  },
  created: function () {
    const resourceUrl = 'http://api.tiqav.com/search/random.json'
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
</style>
