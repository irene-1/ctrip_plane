import Vue from 'vue'
import VueRouter from 'vue-router'

// component添加的组件
import indexFooter from '../views/Index_footer.vue'
import planeIndex from '../views/Plane_index.vue'
import planeMovement from '../views/Plane_movement.vue'
import planeSeat from '../views/Plane_seat.vue'
import planePay from '../views/Plane_pay.vue'
import planeSelect from '../views/Plane_select.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/planeMovement',
    component:planeMovement
  },
  {
    path:'/planePay',
    component:planePay
  },
  {
    path:'/planeSelect',
    component:planeSelect
  },
  {
    path:'/planeIndex',
    component:planeIndex
  }
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

export default router
