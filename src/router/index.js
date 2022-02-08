import Vue from 'vue'
import VueRouter from 'vue-router'
import LibraryView from '../views/LibraryView.vue'
import SingleBookView from '../views/SingleBookView.vue'
import ReadingListView from '../views/ReadingListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LibraryView',
    component: LibraryView
  },
  {
    path: '/book/:id',
    name: 'SingleBookView',
    component: SingleBookView
  },
  {
    path: '/readinglist/',
    name: 'ReadingList',
    component: ReadingListView
  }
]

const router = new VueRouter({
  routes
})

export default router
