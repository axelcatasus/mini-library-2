<template>
  <div class="single-book-view">
    <router-link to='/'>🔙</router-link>
    <Book :book="book" :class='{beeg}' :style="book"/>
    <div class="single-book-info">
      <h1>{{book.title}}</h1>
      <h2>by {{book.author}}</h2>
      <p>{{book.plot}}</p>
      <div class="single-book-facts">
        <p><b>Audience: </b>{{book.audience}}</p>
        <p><b>First published: </b>{{book.year}}</p>
        <p><b>Pages: </b>{{book.pages}}</p>
        <p><b>Publisher: </b>{{book.publisher}}</p>
      </div>
      <button @click="$store.commit('addToReadingList', book)">Add to reading list</button>
    </div>
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

a
  text-decoration: none
  margin: 1rem
  
button
  width: 8rem
  padding: .5rem
  margin-top: 1rem
  

.single-book-facts
  background: grey
  font-size: 0.9rem
  display: grid
  grid-template-columns: 1fr 1fr
  margin-top: 2rem
  padding: 1rem
  border-radius: 3px

.single-book-view
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh

.single-book-info
  display: flex
  flex-direction: column
  height: 27rem
  width: 28rem
  margin: 1rem

</style>