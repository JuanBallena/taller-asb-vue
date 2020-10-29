<template>
  <div class="subtitle">{{ text }}</div>
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

.subtitle
  color: var(--v-secondaryColor-base)
  font-size: 14px
  padding: 14px 0

@media (max-width: 610px)
  .subtitle
    font-size: 12px
    padding: 14px 0

</style>