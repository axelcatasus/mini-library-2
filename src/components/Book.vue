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

h2
  font-size: 1.4rem

article
  // background: linear-gradient(.25turn, green, lightgreen)
  background: red
  height: 18rem
  width: 12rem
  padding: 1rem
  display: flex
  flex-direction: column
  justify-content: flex-end
  border-radius: .2rem

.beeg
  min-height: 27rem
  min-width: 18rem
  background: radial-gradient(red, gold)


</style>