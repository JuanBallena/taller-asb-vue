<template>
  <v-text-field
    :value="value"
    @input="$emit('input', $event)"
    @keyup.enter="$emit('enter', $event)"
    @click:append="$emit('click-icon', $event)"
    rounded
    class="search-input"
    color="successColor"
    :placeholder="placeholder"
    append-icon="fas fa-search"
  >
  </v-text-field>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      default: '',
      type: String
    },
    placeholder: {
      default: 'Buscar',
      type: String
    }
  }
});
</script>

<style lang="sass" scoped>

.search-input
  background: var(--v-accentColor-base)
  padding: 2px 0 0 0
  margin: 0
  height: 36px
  font-size: 14px
  
</style>