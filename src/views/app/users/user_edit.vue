<template>
  <div>
    <TitleComponent text="Editar usuario" />
    
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
            <SelectInputComponent
              label="Roles"
              v-model="userForm.idRole"
              :items="roleList"
              itemText="name"
              itemValue="id"
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <RadioGroupComponent
              label="Estado"
              v-model="userForm.idStatus"
              :items="parameterList1"
              itemText="description"
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
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import { PARAMETER_TYPE_STATUS } from "@/definitions/parameter_type_definition";

export default Vue.extend({

  data: () => {
    return {
      userForm: {
        id: -1,
        username: '',
        idRole: -1,
        idStatus: -1,
      },
      showPassword: false
    }
  },

  async created(): Promise<void>{
    const idUser = this.$route.params.id;
    await this.getUser(idUser);
    await this.getRoleList();
    await this.getParameterList1(`?idParameterType=${ PARAMETER_TYPE_STATUS }`)

    this.userForm.id = this.user.id;
    this.userForm.username = this.user.username;
    this.userForm.idRole = this.user.role.id;
    this.userForm.idStatus = this.user.status.id;
  },

  computed: {
    ...mapState('userModule', ['user']),
    ...mapState('roleModule', ['roleList']),
    ...mapState('parameterModule', ['parameterList1']),
  },

  methods: {
    ...mapMutations('roleModule', ['RESET_ROLE_LIST']),
    ...mapMutations('parameterModule', ['RESET_PARAMETER_LIST_1']),
    ...mapActions('userModule', ['getUser','updateUser']),
    ...mapActions('roleModule', ['getRoleList']),
    ...mapActions('parameterModule', ['getParameterList1']),

    async save(): Promise<void> {
      
      await this.updateUser(this.userForm);
      this.$router.push({ name: 'user-list' });
    }
  },

  beforeDestroy(): void {
    this.RESET_ROLE_LIST();
    this.RESET_PARAMETER_LIST_1();
  }
});
</script>