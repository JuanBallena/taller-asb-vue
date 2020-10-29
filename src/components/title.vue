<template>
  <div id="title">{{ text }}</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  
  props: {
    text: {
      default: 'text',
      type: String
    }
  }

});
</script>

<style lang="sass" scoped>

#title
  color: var(--v-secondaryColor-base)
  font-size: 28px
  width: 100%

@media (max-width: 750px)
  #title
    font-size: 20px
    font-weight: bold

</style>