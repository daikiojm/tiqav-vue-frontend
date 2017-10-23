<template>
  <p class="mainimage-tags">
    <el-tag type="gray" v-for="tag in inputTags" :key="tag" v-on:click.native="onClickTag(tag)">#{{tag}}</el-tag>
  </p>
</template>

<script>
export default {
  name: 'tagList',
  props: ['inputTags'],
  methods: {
    onClickTag: function (word) {
      if (word) {
        this.$router.push({path: '/search', query: { q: word }})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mainimage-tags {
  text-align: left;
  .el-tag {
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
