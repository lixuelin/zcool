import Vue from 'vue'
import Router from 'vue-router'

import zIndex from '@/views/zcool_index'
import zPlan from '@/views/zcool_plan'
import zFind from '@/views/zcool_find'
import zTop from '@/views/zcool_top'
import topDetail from '@/views/zcool_top_detail'
import zJob from '@/views/zcool_job'
import jobDetail from '@/views/zcool_job_detail'
import zDesigner from '@/views/zcool_designer'
import designerDetail from '@/views/zcool_designer_detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'zIndex',
      component: zIndex
    },
    {
      path: '/find',
      name: 'zFind',
      component: zFind
    },
    {
      path: '/top',
      name: 'zTop',
      component: zTop
    },
    {
      path: '/top_detail',
      name: 'topDetail',
      component: topDetail
    },
    {
      path: '/job',
      name: 'zJob',
      component: zJob
    },
    {
      path: '/job_detail',
      name: 'jobDetail',
      component: jobDetail
    },
    {
      path: '/matter',
      name: 'zMatter',
      component: zIndex
    },
    {
      path: '/class',
      name: 'zClass',
      component: zIndex
    },
    {
      path: '/plan',
      name: 'zPlan',
      component: zPlan
    },
    {
      path: '/designer',
      name: 'zDesigner',
      component: zDesigner
    },
    {
      path: '/designer_detail',
      name: 'designerDetail',
      component: designerDetail
    }
  ]
})
