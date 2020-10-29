<template>
  <div>
    <TitleComponent text="Editar alumno" />
    <div>{{ student }}</div>
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
    const idStudent = this.$route.params.id;
    await this.getStudent(idStudent);
  },

  computed: {
    ...mapState('studentModule', ['student']),
  },

  methods: {
    ...mapActions('studentModule', ['getStudent','resetStudent']),
  },

  beforeDestroy() {
    this.resetStudent();
  }
});
</script>