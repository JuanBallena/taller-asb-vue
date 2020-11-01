<template>
  <div>
    <label class="label">{{ label}}</label>
    <v-text-field
      :value="value"
      @input="$emit('input', $event)"
      @keyup.enter="$emit('enter', $event)"
      :placeholder="placeholder"
      outlined
      :type="type"
      dense
      color=""
      class="input-text"
    >
      <template v-slot:append v-if="icon">
        <v-icon
          small 
          @click="$emit('click-icon')"
          class="mt-1"
        >
          {{ icon }}
        </v-icon>
      </template>
    </v-text-field>
  </div>
   
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: 'Field'
    },
    placeholder: {
      type: String,
      default: 'Field...'
    },
    value: {
      default: '',
      type: String
    },
    type: {
      default: 'text',
      type: String
    },
    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.label {
  font-size: 13px;
  color: var(--v-secondaryColor-base);
  font-weight: normal;
}
.input-text {
  border-radius: 0;
  /* margin: 4px 0 0 0; */
  height: 42px;
}
.input-text >>> .v-text-field__slot input::placeholder {
  color: var(--v-infoColor-base);
  font-size: 14px;
}
.v-text-field--outlined >>> fieldset {
  border-color: var(--v-infoColor-base);
}
</style>