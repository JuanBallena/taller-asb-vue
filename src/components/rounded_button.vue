<template>
  <v-btn outlined rounded class="rounded-button" :to="route">
    {{ text }}
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    route: {
      default: () => [],
      type: Object
    },
    text: {
      default: 'button',
      type: String
    }
  }
});
</script>

<style lang="sass" scoped>

.rounded-button
  color: var(--v-successColor-base)
  border: 2px solid

</style>