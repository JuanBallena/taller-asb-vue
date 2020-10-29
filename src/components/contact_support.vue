<template>
  <div :class="`contact-support ${color}--text`">
    services@support.com
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      default: 'secondaryColor',
      type: String
    }
  }
});
</script>

<style lang="sass" scoped>

.contact-support
  font-size: 12px
  font-weight: bold
  text-align: center
  margin: 40px 0 10px 0

</style>