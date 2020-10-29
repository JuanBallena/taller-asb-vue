<template>
  <div>
    <TitleComponent text="Editar usuario" />
    {{ user }}
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
    const idUser = this.$route.params.id;
    await this.getUser(idUser);
  },

  computed: {
    ...mapState('userModule', ['user']),
  },

  methods: {
    ...mapActions('userModule', ['getUser','resetUser']),
  },
});
</script>