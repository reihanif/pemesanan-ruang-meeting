import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import MeetingRoomView from '../views/MeetingRoomView.vue'
import BookRoomView from '../views/BookRoomView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/ruang-meeting',
      name: 'ruang-meeting',
      component: MeetingRoomView,
      children: [
        {
          path: 'pesan-ruangan',
          component: BookRoomView
        }
      ]
    }
  ]
})

export default router
