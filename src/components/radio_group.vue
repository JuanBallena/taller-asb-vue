<template>
  <div>
    <label class="label">{{ label }}</label>
    <v-radio-group
      dense
      class="radio-group"
      :mandatory="false"
      :value="value"
      @keypress="$emit('input', $event)"
    >
      <v-row class="mx-0">
        <v-col cols="12" :lg="column" :md="column" :sm="column" class="pa-0"
          v-for="(item, index) in items" :key="index">
          <v-radio 
            :label="item.text"
            :color="radioColor"
            :value="item.value" 
            :class="`radio ${ items.length == index ? '' : 'margin-xs' }`"
          >
          {{ items.length }}
          </v-radio>
        </v-col>
      </v-row>
    </v-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Option } from "@/models/Option";
export default Vue.extend({
  props: {
    label: {
      type: String,
      default: 'Radios'
    },
    value: {
      default: null,
      type: Number
    },
    radioColor: {
      type: String,
      default: 'successColor'
    },
    items: {
      type: Array as () => Array<Option>,
      default: () => []
    },
  },

  computed: {
    column(): string {
      return this.items.length == 2 ? "6" : "4";
    },
  },
});
</script>

<style scoped>
.label {
  font-size: 13px;
  color: var(--v-secondaryColor-base);
  font-weight: normal;
}
.radio-group {
  padding: 0;
  margin: 0;
  height: 48px;
}
.radio {
  padding: 7px;
  border: solid 1px var(--v-infoColor-base);
}
.radio >>> label {
  font-size: 14px;
}
.radio >>> .v-icon.v-icon--dense {
  font-size: 16px;
  color: var(--v-successColor-base);
}

@media (max-width: 599px) {
  .margin-xs {
    margin: 0 0 6px 0;
  }
  .radio-group {
    height: 90px;
  }
}
</style>