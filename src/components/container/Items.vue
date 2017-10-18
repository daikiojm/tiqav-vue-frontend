<template>
<div class="_wapper">
  <p>Items</p>
  <el-card class="mainimage-media">
    <p class="mainimage-id">{{mainItem.id}}</p>
    <div class="image-wapper">
      <img v-bind:src="getImage()" v-bind:alt="mainItem.id">
    </div>
    <p class="mainimage-source-url">ソース: <span>{{mainItem.source_url}}</span></p>
    <p class="mainimage-tags">
      <el-tag type="gray" v-for="tag in mainItem.tags" :key="tag">#{{tag}}</el-tag>
    </p>
  </el-card>

  <el-row>
    <el-col :span="24">
    <div class="mainimage-info-wapper">
      <el-card>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="mainimage-info-forms">
              <el-row class="form-row">
                <el-col :span="18">
                  <el-form label-width="100px">
                    <el-form-item label="image">
                      <span slot="label">画像URL:</span>
                      <el-input placeholder="" v-bind:value="getNakedImageUrl()"></el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :span="4">
                  <el-button>コピー</el-button>
                </el-col>
              </el-row>
              <el-row class="form-row">
                <el-col :span="18">
                  <el-form label-width="100px">
                    <el-form-item label="image">
                      <span slot="label">リンク:</span>
                      <el-input placeholder="" v-bind:value="geImageLink()"></el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :span="4">
                  <el-button>コピー</el-button>
                </el-col>
              </el-row>
              <el-row class="form-row">
                <el-col :span="18">
                  <el-form label-width="100px">
                    <el-form-item label="image">
                      <span slot="label">Markdown:</span>
                      <el-input placeholder="" v-bind:value="getMarkdownLink()"></el-input>
                    </el-form-item>
                  </el-form>
                </el-col>
                <el-col :span="4">
                  <el-button>コピー</el-button>
                </el-col>
              </el-row>
            </div></el-col>
        </el-row>

      </el-card>
    </div>
    </el-col>
  </el-row>

  <el-row :gutter="20">
    <el-col :span="8">
      <div class="subimage-media"></div>
      <el-card>
        <p>hoge</p>
      </el-card>
    </el-col>
    <el-col :span="8">
      <div class="subimage-media">
        <el-card>
          <p>hoge</p>
        </el-card>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="subimage-media">
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
      const resourceUrl = `${process.env.API_ENDPOINT}/images/${id}.json`
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
      return `${process.env.IMAGE_ENDPOINT}/${this.mainItem.id}.${this.mainItem.ext}`
    },
    getTags (id) {
      const resourceUrl = `${process.env.API_ENDPOINT}/images/${id}/tags.json`
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
    },
    // リンク先は本家tiqav
    getNakedImageUrl () {
      return `${process.env.IMAGE_ENDPOINT}/${this.mainItem.id}.${this.mainItem.ext}`
    },
    // リンク先は本家tiqav
    geImageLink () {
      const imageUrl = this.getNakedImageUrl()
      const _tag = `<a href="${process.env.IMAGE_ENDPOINT}/${this.mainItem.id}" target="_blank"><img alt="${this.mainItem.id}" src="${imageUrl}" /></a>`
      return _tag
    },
    getMarkdownLink () {
      const thumbnailUrl = `${process.env.IMAGE_ENDPOINT}/${this.mainItem.id}.th.${this.mainItem.ext}`
      const _tags = this.mainItem.tags.length !== 0 ? this.mainItem.tags.join(' ') : ''
      const _markdown = `[![${_tags}](${thumbnailUrl})](${process.env.IMAGE_ENDPOINT}/${this.mainItem.id})`
      return _markdown
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
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  &.form-row {
    margin-bottom: 0;
  }
}
</style>
