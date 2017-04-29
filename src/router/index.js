import Vue from 'vue'
import Router from 'vue-router'
import map from '@/components/map'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'map',
      component: map
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }

  ]
})
