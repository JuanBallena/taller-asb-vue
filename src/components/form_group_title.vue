<template>
  <div class="formGroupTitle">{{ text }}</div>
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

.formGroupTitle
  color: var(--v-secondaryColor-base)
  font-size: 13px
  padding: 8px 0 0 0
  font-weight: bold
  text-transform: uppercase

@media (max-width: 610px)
  .formGroupTitle
    padding: 8px 0 0 0

</style>