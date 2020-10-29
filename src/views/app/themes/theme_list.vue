<template>
  <div>
    <v-row id="style__row">
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <TitleComponent text="Temas" />

        <div class="style__row__col__div">
          <RoundedButtonComponent text="Nuevo" :route="{ name: 'theme-create' }" />
        </div>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <SearchInputComponent
          v-model="query"
          @enter="searchTheme()"
          @click-icon="searchTheme()"
          placeholder="Escriba título de tema" 
        />
      </v-col>
    </v-row>
    <SubtitleComponent text="Lista de temas musicales" />

    <ThemeTableComponent :items="themeList" />

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
import ThemeTableComponent from "@/views/app/themes/theme_table.vue";

export default Vue.extend({

  components: {
    ThemeTableComponent
  },

  data: () => {
    return {
      size: 15,
      page: 1,
      query: '',
    }
  },

  async created() {
    await this.getThemeList(`?page=${ this.pageApi }&size=${ this.size }`);
  },

  computed: {
    ...mapState('themeModule', ['themeList','totalPages']),

    pageApi(): number {
      return this.page - 1;
    }
  },

  methods: {
    ...mapActions('themeModule', ['getThemeList','resetThemeList','resetTotalPages']),

    async changePage() {
      await this.getThemeList(`?page=${ this.pageApi }&size=${ this.size }`);
    },

    async searchTheme() {
      await this.getThemeList(`?q=${ this.query }&page=0&size=${ this.size }`);
    }
  },

  beforeDestroy() {
    this.resetThemeList();
    this.resetTotalPages();
  },
});
</script>