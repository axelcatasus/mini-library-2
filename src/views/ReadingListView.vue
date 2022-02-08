<template>
  <div>
    <router-link to="/">🔙</router-link>
    <ul>
      <li v-for="book in readingList" :key="book.id">
        {{book.title}} by {{book.author}}
        <button @click="$store.commit('removeFromReadingList', book)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    readingList(){
      return this.$store.state.readingList
    }
  }

}
</script>

<style lang="sass" scoped>

</style>