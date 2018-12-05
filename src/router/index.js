import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import SimpleViewer from '@/components/SimpleViewer'
import SimpleModeler from '@/components/SimpleModeler'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/simple-viewer',
      name: 'SimpleViewer',
      component: SimpleViewer
    },
    {
      path: '/simple-modeler',
      name: 'SimpleModeler',
      component: SimpleModeler
    }
  ]
})
