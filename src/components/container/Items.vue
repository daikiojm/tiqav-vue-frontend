<template>
<div class="_wapper">
  <p>Items</p>
  <el-card class="mainimage-media">
    <p class="mainimage-id">{{mainItem.id}}</p>
    <div class="image-wapper">
      <img v-bind:src="getImage()" alt="">
    </div>
    <p class="mainimage-source-url">ソース: <span>{{mainItem.source_url}}</span></p>
    <p class="mainimage-tags">
      <el-tag type="gray" v-for="tag in mainItem.tags" :key="tag">#{{tag}}</el-tag>
    </p>
  </el-card>

  <el-row>
    <el-col :span="24">
    <div class="grid-content bg-purple">
      <el-card>
        <p>hoge</p>
      </el-card>
    </div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="8"><div class="grid-content bg-purple"></div>
      <el-card>
        <p>hoge</p>
      </el-card>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple-light">
        <el-card>
          <p>hoge</p>
        </el-card>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content bg-purple">
        <el-card>
          <p>hoge</p>
        </el-card>
      </div>
    </el-col>
</el-row>

</div>
</template>

<script>
// import Vue from 'vue'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

export default {
  data () {
    return {
      mainItem: {
        id: '',
        ext: '',
        source_url: '',
        tags: ''
      }
    }
  },
  created: function () {
    this.mainItem.id = this.$route.params.id
    this.getImageInfo(this.mainItem.id)
    this.getTags(this.mainItem.id)
  },
  methods: {
    getImageInfo (id) {
      const resourceUrl = process.env.API_ENDPOINT + '/images/' + id + '.json'
      const config = { adapter: jsonpAdapter }
      axios.get(resourceUrl, config)
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.mainItem.ext = res.data.ext
            this.mainItem.source_url = res.data.source_url
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getImage () {
      return process.env.IMAGE_ENDPOINT + '/' + this.mainItem.id + '.' + this.mainItem.ext
    },
    getTags (id) {
      const resourceUrl = process.env.API_ENDPOINT + '/images/' + id + '/tags.json'
      const config = { adapter: jsonpAdapter }
      axios.get(resourceUrl, config)
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.mainItem.tags = res.data
          }
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
.mainimage-media {
  margin-bottom: 20px;
}
img {
  width: 100%;
}
.mainimage-source-url {
  text-align: right;
}
.mainimage-tags {
  text-align: left;
  .el-tag {
    margin-right: 10px;
  }
}

.el-row {
  margin-top: 20;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
// .el-col {
//   border-radius: 4px;
// }
// .bg-purple-dark {
//   background: #99a9bf;
// }
// .bg-purple {
//   background: #d3dce6;
// }
.bg-purple-light {
  background: #e5e9f2;
}
// .grid-content {
//   border-radius: 4px;
//   min-height: 36px;
// }
// .row-bg {
//   padding: 10px 0;
//   background-color: #f9fafc;
// }
</style>
