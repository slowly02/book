import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

let ary = [
  {
    path:'/*',
    redirect:'/home'
  }
]

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/Home.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/About.vue')
  // }
  {
    path:'/',
    component:() => import('../views/views.vue'),
    redirect:'/home',
    children:[
      {
        path:'/home',
        name:'home',
        component:() => import('../views/home')
      },
      {
        path:'/list',
        name:'list',
        component:() => import('../views/list')
      },
      {
        path:'/collect',
        name:'collect',
        component:() => import('../views/collect')
      },
      {
        path:'/add',
        name:'add',
        component:() => import('../views/add')
      }
    ]
  },
  {
    path:'/login',
    component:() => import('../views/login')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes:routes.concat(ary),
  linkActiveClass:'current'
})

export default router
