<template>
  <div>
    <TitleComponent text="Registrar usuario" />

    <v-row>
      <v-col cols="12" lg="10" md="10" sm="10">
        <FormGroupTitleComponent text="Datos de usuario" />
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Usuario"
              v-model="userForm.username"
              placeholder="Usuario..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Contraseña"
              v-model="userForm.password"
              placeholder="Contraseña..." 
              :type="showPassword ? 'text' : 'password'"
              :icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
              @click-icon="showPassword = !showPassword"
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <SelectInputComponent
              label="Roles"
              v-model="userForm.idRole"
              :items="roleList"
              itemText="name"
              itemValue="id"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6">
            <FormButtonComponent
              icon="fas fa-arrow-left"
              text="Regresar a usuarios"
              color="accentColor"
              textColor="infoColor"
              :route="{ name: 'user-list' }"
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="6">
            <FormButtonComponent
              text="Guardar"
              color="successColor"
              textColor="white"
              class="float-right"
              @click="save()"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from "vuex";

export default Vue.extend({

  data: () => {
    return { 
      userForm: {
        username: '',
        password: '',
        idRole: -1
      },
      showPassword: false
    }
  },

  async created(): Promise<void> {
    await this.getRoleList();
  },

  computed: {
    ...mapState('roleModule', ['roleList'])
  },

  methods: {
    ...mapMutations('roleModule', ['RESET_ROLE_LIST']),
    ...mapActions('roleModule', ['getRoleList']),
    ...mapActions('userModule', ['saveUser']),

    async save(): Promise<void> {
      
      await this.saveUser(this.userForm);
      this.$router.push({ name: 'user-list' });
    }
  },

  beforeDestroy(): void {
    this.RESET_ROLE_LIST();
  }
});
</script>
