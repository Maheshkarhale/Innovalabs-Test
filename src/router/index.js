import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParentComponent from '../components/ParentComponent.vue'
import UsersComponent from '../components/UsersComponent.vue'
import UserForm from '../components/UserForm.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
   path: '/',
   name: 'parent',
   component: ParentComponent
  },
  {
    path: '/user',
    name: 'user',
    component: UsersComponent
  },
  {
    path:'/form',
    name: 'form',
    component: UserForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
