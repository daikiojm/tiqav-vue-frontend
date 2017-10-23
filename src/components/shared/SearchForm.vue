<template>
<el-autocomplete
  icon="search"
  v-model="searchWord"
  :fetch-suggestions="querySearchAsync"
  :trigger-on-focus="false"
  placeholder="tiqavを検索"
  @select="handleSearch"
  @keyup.enter.native="handleSearch"
  :on-icon-click="handleSearch">
  </el-autocomplete>
</template>

<script>
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

export default {
  name: 'SearchForm',
  data () {
    return {
      suggestWords: [],
      searchWord: ''
    }
  },
  methods: {
    querySearchAsync (queryString, cb) {
      const resourceUrl = `${process.env.API_ENDPOINT}/tags.json?q=${queryString}`
      const config = { adapter: jsonpAdapter }
      axios.get(resourceUrl, config)
        .then((res) => {
          if (res.status === 200) {
            this.suggestWords = res.data.map(
              x => {
                return { value: x }
              }
            )
            cb(this.suggestWords)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createFilter (queryString) {
      return (word) => {
        return (word.value.indexOf(queryString.toLowerCase()) === 0)
      }
    },
    getWords (word, cb) {
      const resourceUrl = `${process.env.API_ENDPOINT}/tags.json?q=${word}`
      const config = { adapter: jsonpAdapter }
      axios.get(resourceUrl, config)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleSearch () {
      this.$router.push({path: '/search', query: { q: this.searchWord }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
