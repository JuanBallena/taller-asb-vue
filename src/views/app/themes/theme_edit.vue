<template>
  <div>
    <TitleComponent text="Editar tema" />
    <div>{{ theme }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

export default Vue.extend({

  data: () => {
    return {
      //
    }
  },

  async created() {
    const idTheme = this.$route.params.id;
    await this.getTheme(idTheme);
  },

  computed: {
    ...mapState('themeModule', ['theme']),
  },

  methods: {
    ...mapActions('themeModule', ['getTheme','resetTheme']),
  },

  beforeDestroy() {
    this.resetTheme();
  }
});
</script>