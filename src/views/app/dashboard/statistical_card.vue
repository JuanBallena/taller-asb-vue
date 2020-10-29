<template>
  <v-card elevation="0" tile>
    <v-card-text class="statistical-card">
      <v-list class="statistical-card__container">
        <v-list-item>
          <v-list-item-content :class="`statistical-card__value ${color}--text`">
            {{ value }}
          </v-list-item-content>

          <v-list-item-action>
            <v-icon :color="color" class="statistical-card__icon">
              {{ icon }}
            </v-icon>
          </v-list-item-action>
        </v-list-item>
        
        <v-list-item-content class="statistical-card__description">
          {{ description }}
        </v-list-item-content>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    value: {
      default: '0',
      type: String
    },
    icon: {
      default: 'fa-home',
      type: String
    },
    description: {
      default: 'description',
      type: String
    },
    color: {
      default: 'successColor',
      type: String
    }
  }
});
</script>

<style lang="sass" scoped>

.statistical-card
  padding: 0

.statistical-card__container
  padding: 10px 4px
  background: var(--v-accentColor-base)

.statistical-card__value
  font-size: 28px
  font-weight: bold
  color: var(--v-secondaryColor-base)

.statistical-card__icon
  font-size: 22px

.statistical-card__description
  font-size: 14px
  padding: 5px 18px
  text-align: justify
  color: var(--v-secondaryColor-base)

</style>