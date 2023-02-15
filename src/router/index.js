import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Login from '../components/Layout/Login.vue'
import Dashboard from '../components/Layout/Dashboard.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/product',
        name: 'product',
        component: AboutView

      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
