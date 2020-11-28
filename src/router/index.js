import Vue from 'vue'
import VueRouter from 'vue-router'

// component添加的组件
// 机票首页组件
import planeIndex from '../views/Plane_index.vue'
// 公告--链接组件
import publicNotice from '../views/public_notice.vue'
// 航班动态组件
import planeMovement from '../views/Plane_movement.vue'
// 选座组件
import planeSeat from '../views/Plane_seat.vue'
// 机票搜索详情组件
import planeSelect from '../views/Plane_select.vue'
// 支付第一步--乘机信息填写组件
import planePay from '../views/Plane_pay.vue'
// 支付第二步--确认订单-选择支付组件
import planePay02 from '../views/Plane_pay02.vue'
// 支付完成组件
import planePay03 from '../views/Plane_pay03.vue'



Vue.use(VueRouter)

const routes = [
  // 航班动态
  {
    path:'/planeMovement',
    component:planeMovement
  },
  // 支付第一步--乘机信息填写
  {
    path:'/planePay',
    component:planePay
  },
  // 支付第二步--确认订单-选择支付
  {
    path:'/planePay02',
    component:planePay02
  },
  // 支付完成
  {
    path:'/planePay03',
    component:planePay03
  },
  {
    path:`/planeSelect`,
    component:planeSelect
  },
  // 机票搜索详情组件--带参传递
  {
    path:`/planeSelect/:toUrl`,
    component:planeSelect
  },
  // 公告--链接
  {
    path:'/publicNotice',
    component:publicNotice
  },
  // 机票首页
  {
    path:'/planeIndex',
    component:planeIndex
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router;
