<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0">VueTiqav</el-menu-item>
    <el-menu-item index="1"><router-link to="search">Search</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="newest">Newest</router-link></el-menu-item>
    <el-menu-item index="3"><router-link to="random">Random</router-link></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      activeIndex: '1'
    }
  },
  created: function () {
    this.activeIndex = this.getActiveIndex()
  },
  methods: {
    getActiveIndex () {
      const routerLinks = [
        { label: 'Search', index: '1' },
        { label: 'Newest', index: '2' },
        { label: 'Random', index: '3' }
      ]
      let activeIndex = this.activeIndex
      routerLinks.forEach((elm, index) => {
        if (this.$route.name === elm.label) {
          activeIndex = elm.index
        }
      })
      return activeIndex
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
