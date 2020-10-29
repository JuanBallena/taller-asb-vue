<template>
  <v-btn
    rounded
    depressed
    :block="block"
    :small="small"
    :color="color"
    :to="route"
    id="roundedButtonColor"
  >
    {{ text }}

    <v-icon class="roundedButtonColor__icon" v-if="icon">{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    route: {
      default: null,
      type: Object
    },
    text: {
      default: 'button',
      type: String
    },
    icon: {
      default: null,
      type: String
    },
    color: {
      default: 'successColor',
      type: String
    },
    small: {
      default: false,
      type: Boolean
    },
    block: {
      default: false,
      type: Boolean
    }
  }
});
</script>

<style lang="sass" scoped>

#roundedButtonColor
  color: white
  padding: 0px 30px

.roundedButtonColor__icon
  padding: 0 0 0 10px
  font-size: 15px

@media (max-width: 610px)
  #roundedButtonColor
    width: 100%

</style>