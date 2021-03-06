'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ENDPOINT: '"http://api.tiqav.com"',
  IMAGE_ENDPOINT: '"http://img.tiqav.com"'
})
