import Vue from 'vue'
import Vuex from 'vuex'
import books from '@/assets/books.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [...books],
    readingList: []
  },
  mutations: {
    addToReadingList(state, newBook){
      if(!state.readingList.find(book => book.id == newBook.id)){
        state.readingList.push(newBook)
      }
    },
    removeFromReadingList(state, removeBook){
      state.readingList = state.readingList.filter(book => book.id != removeBook.id)
    }
  },
  actions: {
  },
  modules: {
  }
})
