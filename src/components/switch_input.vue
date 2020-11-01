<template>
  <v-switch
    dense
    color="successColor"
    :label="label"
    :disabled="disabled"
    :input-value="value"
    @change="$emit('input', $event)"
  >
  </v-switch>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: 'Radios'
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>