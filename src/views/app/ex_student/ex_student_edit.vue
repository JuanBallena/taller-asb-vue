<template>
  <div>
    <TitleComponent text="Editar ex alumno" />
    <div>{{ exStudent }}</div>
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
    const idExStudent = this.$route.params.id;
    await this.getExStudent(idExStudent);
  },

  computed: {
    ...mapState('exStudentModule', ['exStudent']),
  },

  methods: {
    ...mapActions('exStudentModule', ['getExStudent','resetExStudent']),
  },

  beforeDestroy() {
    this.resetExStudent();
  }
});
</script>