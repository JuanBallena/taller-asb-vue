<template>
  <div>
    <v-row id="style__row">
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <TitleComponent text="Usuarios" />
        
        <div class="style__row__col__div">
          <RoundedButtonComponent text="Nuevo" :route="{ name: 'user-create' }" />
        </div>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <SearchInputComponent
          v-model="query"
          @enter="searchUser()"
          @click-icon="searchUser()"
          placeholder="Escriba nombre de usuario" 
        />
      </v-col>
    </v-row>
    
    <SubtitleComponent text="Lista de usuarios" />
    <UserTableComponent :items="userList" />

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
import UserTableComponent from "@/views/app/users/user_table.vue";

export default Vue.extend({

  components: {
    UserTableComponent
  },

  data: () => {
    return {
      size: 15,
      page: 1,
      query: '',
    }
  },

  async created(): Promise<void> {
    await this.getUserList(`?page=${ this.pageApi }&size=${ this.size }`);
  },

  computed: {
    ...mapState('userModule', ['userList','totalPages']),

    pageApi(): number {
      return this.page - 1;
    }
  },

  methods: {
    ...mapActions('userModule', ['getUserList','resetUserList','resetTotalPages']),

    async changePage(): Promise<void> {
      await this.getUserList(`?page=${ this.pageApi }&size=${ this.size }`);
    },

    async searchUser(): Promise<void> {
      await this.getUserList(`?q=${ this.query }&page=0&size=${ this.size }`);
    }
  },

  beforeDestroy() {
    //this.resetUserList();
    //this.resetTotalPages();
  },
});
</script>