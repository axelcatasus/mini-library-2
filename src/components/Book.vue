<template>
  <article>
    <h2>{{book.title}}</h2>
    <span>{{book.author}}</span>
  </article>
</template>

<script>
export default {
  props:['book'],
  

}
</script>

<style lang="sass">

article
  background: tomato
  height: 18rem
  width: 12rem
  padding: 1rem
  display: flex
  flex-direction: column
  justify-content: flex-end

.beeg
  height: 27rem
  width: 18rem
  background: red


</style>