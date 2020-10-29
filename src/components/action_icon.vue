<template>
  <v-btn
    small
    depressed
    icon 
    @click="$emit('click')" 
    :to="route"
  >
    <v-icon
      id="actionIcon__icon"
    >
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: {
      default: 'fa-home',
      type: String
    },
    route: {
      default: () => [],
      type: Object
    }
  }
});
</script>

<style lang="sass" scoped>

#actionIcon__icon
  font-size: 12px
  color: var(--v-secondaryColor-base)
</style>