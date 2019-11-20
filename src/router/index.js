import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlog',
      component: ShowBlog
    },
    {
      path: '/addBlog',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    }
  ]
})
