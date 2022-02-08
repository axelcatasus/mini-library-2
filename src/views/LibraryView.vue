<template>
  <div class="home">
    <router-link :to="'/book/' + book.id" v-for="book in books" :key="book.id">
      <Book :book="book"/>
    </router-link>
  </div>
</template>

<script>
import Book from '../components/Book.vue'

export default {
  components: {Book},
  computed: {
    books(){
       return this.$store.state.books
    }
  }
}
</script>

<style lang="sass">

a
  text-decoration: none
  color: white

.home
  display: grid
  grid-template-rows: 1fr 1fr 1fr 1fr
  grid-template-columns: 1fr 1fr 1fr 1fr
  grid-column-gap: 1rem
  grid-row-gap: 1rem



  
</style>