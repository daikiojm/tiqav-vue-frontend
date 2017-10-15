import Vue from 'vue'
import Router from 'vue-router'
import Newest from '@/components/container/Newest'
import Random from '@/components/container/Random'
import Search from '@/components/container/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/newest'
    },
    {
      path: '/newest',
      name: 'Newest',
      component: Newest
    },
    {
      path: '/random',
      name: 'Random',
      component: Random
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
