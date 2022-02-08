<template>
  <div class="single-book-view">
    <Book :book="book" :class='{beeg: beeg}'/>
  </div>
</template>

<script>
import Book from '../components/Book.vue'

export default {
  components: {Book},
  computed: {
    book(){
      return this.$store.state.books.find(book => book.id == this.$route.params.id)
    },
  },
  data(){return{
    beeg: true
  }}
}
</script>

<style scoped lang="sass">
  .single-book-view
    display: grid
    place-items: center
    min-height: 100vh
</style>