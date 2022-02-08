<template>
  <div class="home">
    <input type="text" v-model="search">
    <router-link to="/readinglist/"><button>Show reading list</button></router-link>
    <div class="grid">
      <router-link :to="'/book/' + book.id" v-for="book in books" :key="book.id">
        <Book :book="book"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import Book from '../components/Book.vue'

export default {
  data(){return{
    search: ''
  }},
  components: {Book},
  computed: {
    books(){
      if(this.search.length == 0){
        return this.$store.state.books
      }else {
       return this.$store.state.books.filter(book => book.title.toLowerCase().includes(this.search.toLowerCase()))
      }
    }
  }
}
</script>

<style lang="sass" scoped>

a
  text-decoration: none
  color: white

.grid
  margin-top: 3rem
  place-items: center
  display: grid
  grid-template-rows: 1fr 1fr 1fr 1fr
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-column-gap: 1rem
  grid-row-gap: 1rem



  
</style>