<template>
  <div class="item-list">
    <v-icon small class="item-list__icon">
      {{ icon }}
    </v-icon>

    <div class="item-list__text">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    icon: {
      default: 'fa-home',
      type: String
    },
    text: {
      default: 'Item',
      type: String,
    },
  }
});
</script>

<style lang="sass" scoped>

.item-list
  margin: 8px 0
  display: flex

.item-list__icon, .item-list__text
  color: var(--v-secondaryColor-base)

.item-list__icon
  width: 20px
  padding: 0 20px 0 10px

.item-list__text
  text-align: justify
  padding: 2px 0 0 0

</style>