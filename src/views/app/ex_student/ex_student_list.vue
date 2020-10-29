<template>
  <div>
    <v-row id="style__row">
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <TitleComponent text="Ex alumnos" />

        <div class="style__row__col__div">
          <RoundedButtonComponent text="Nuevo" :route="{ name: 'ex-student-create' }" />
        </div>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <SearchInputComponent
          v-model="query"
          @enter="searchExStudent()"
          @click-icon="searchExStudent()"
          placeholder="Escriba nombre o apellido" 
        />
      </v-col>
    </v-row>
    
    <SubtitleComponent text="Lista de ex alumnos integrantes de la banda rítmica 2020" />

    <ExStudentTableComponent :items="exStudentList" />

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
import ExStudentTableComponent from "@/views/app/ex_student/ex_student_table.vue";

export default Vue.extend({

  components: {
    ExStudentTableComponent
  },

  data: () => {
    return {
      size: 15,
      page: 1,
      query: '',
    }
  },

  async created() {
    await this.getExStudentList(`?page=${ this.pageApi }&size=${ this.size }`);
  },

  computed: {
    ...mapState('exStudentModule', ['exStudentList','totalPages']),

    pageApi(): number {
      return this.page - 1;
    }
  },

  methods: {
    ...mapActions('exStudentModule', ['getExStudentList','resetExStudentList','resetTotalPages']),

    async changePage() {
      await this.getExStudentList(`?page=${ this.pageApi }&size=${ this.size }`);
    },

    async searchExStudent() {
      await this.getExStudentList(`?q=${ this.query }&page=0&size=${ this.size }`);
    }
  },

  beforeDestroy() {
    this.resetExStudentList();
    this.resetTotalPages();
  },
});
</script>