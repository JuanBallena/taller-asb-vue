<template>
  <div id="title" :class="`${color}--text`">{{ text }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  
  props: {
    text: {
      default: 'text',
      type: String
    },
    color:{
      type: String,
      default: ''
    }
  }

});
</script>

<style lang="sass" scoped>

#title
  color: var(--v-secondaryColor-base)
  font-size: 20px
  width: 100%
  text-transform: uppercase

@media (max-width: 750px)
  #title
    font-size: 18px
    font-weight: bold

</style>