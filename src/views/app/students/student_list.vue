<template>
  <div>
    <v-row id="style__row">
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <TitleComponent text="Alumnos" />

        <div class="style__row__col__div">
          <RoundedButtonComponent text="Nuevo" :route="{ name: 'student-create' }" />
        </div>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <SearchInputComponent
          v-model="query"
          @enter="searchStudent()"
          @click-icon="searchStudent()"
          placeholder="Escriba nombre o apellido" 
        />
      </v-col>
    </v-row>
    <SubtitleComponent text="Lista de alumnos integrantes de la banda rítmica 2020" />

    <StudentTableComponent :items="studentList" />

    <v-pagination
      class="text-center"
      color="successColor"
      v-model="page"
      :length="totalPages"
      :total-visible="5"
      @input="changePage()">
    </v-pagination>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import StudentTableComponent from "@/views/app/students/student_table.vue";

export default Vue.extend({

  components: {
    StudentTableComponent
  },

  data: () => {
    return {
      size: 15,
      page: 1,
      query: '',
    }
  },

  async created() {
    await this.getStudentList(`?page=${ this.pageApi }&size=${ this.size }`);
  },

  computed: {
    ...mapState('studentModule', ['studentList','totalPages']),

    pageApi(): number {
      return this.page - 1;
    }
  },

  methods: {
    ...mapActions('studentModule', ['getStudentList','resetStudentList','resetTotalPages']),

    async changePage() {
      await this.getStudentList(`?page=${ this.pageApi }&size=${ this.size }`);
    },

    async searchStudent() {
      await this.getStudentList(`?q=${ this.query }&page=0&size=${ this.size }`);
    }
  },

  beforeDestroy() {
    this.resetStudentList();
    this.resetTotalPages();
  },
});
</script>