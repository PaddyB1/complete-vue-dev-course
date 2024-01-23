import { createRouter, createWebHistory } from 'vue-router'
import useUserStore from '@/stores/user'

const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const ManageView = () => import('@/views/ManageView.vue')
const SongView = () => import('@/views/SongView.vue')
const NotFoundView = () => import('@/views/404View.vue')

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about'
  },
  {
    path: '/manage-music',
    component: ManageView,
    name: 'manage',
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/manage',
  //   redirect: { name: 'manage' }
  // },
  {
    name: 'song',
    path: '/song/:id',
    component: SongView
  },
  {
    path: '/:catchAll(.*)*',
    component: NotFoundView,
    name: '404'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const store = useUserStore()
  if (store.userLoggedIn) {
    next()
    return
  }

  next({ name: 'home' })
})

export default router
