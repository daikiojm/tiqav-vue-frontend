<template>
  <section>
    <div class="image-wapper" v-for="i in inputImages" :key="i.id" v-bind:style="getImageWapperStyle(i.height, i.width)" v-on:click="onClickThumbnail(i.id)">
      <i v-bind:style="getIStyle(i.height, i.width)"></i>
      <el-tooltip class="item" effect="dark" v-bind:content="i.id" placement="bottom">
        <img class="image" v-lazy="getThumbnail(i.id, i.ext)">
      </el-tooltip>
    </div>
  </section>
</template>

<script>
export default {
  name: 'images',
  props: ['inputImages'],
  methods: {
    getThumbnail (id, ext) {
      return 'http://img.tiqav.com/' + id + '.th.jpg'
    },
    getImageWapperStyle (height, width) {
      return {
        width: width * 200 / height + 'px',
        'flex-grow': width * 200 / height
      }
    },
    getIStyle (height, width) {
      return { 'padding-bottom': height / width * 100 + '%' }
    },
    onClickThumbnail (id) {
      if (id) {
        this.$router.push({name: 'Items', params: { id }})
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
}
section::after {
  content: '';
  flex-grow: 999999999;
}
.image-wapper {
  margin: 4px;
  position: relative;
}
i {
  display: block;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  vertical-align: bottom;
  transition: opacity 1s;
  cursor: pointer;
}
img[lazy=loading] {
  opacity: 0;
}
img[lazy=loaded] {
  opacity: 1;
}
</style>
