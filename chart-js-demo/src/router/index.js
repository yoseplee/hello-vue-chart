import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueChartJS from '../views/VueChartJS.vue'
import VueChartKick from '../views/VueChartKick.vue'
import VueCharts from '../views/VueCharts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chartjs',
    name: 'VueChartJS',
    component: VueChartJS
  },
  {
    path: '/chartkick',
    name: 'VueChartKick',
    component: VueChartKick
  },
  {
    path: '/charts',
    name: 'VueCharts',
    component: VueCharts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
