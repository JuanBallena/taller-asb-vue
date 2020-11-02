<template>
  <div>
    <TitleComponent text="Registrar alumno" color="successColor" />

    <v-row>
      <v-col cols="12" lg="10" md="10" sm="10">
        <FormGroupTitleComponent text="Datos personales" />
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Nombres"
              v-model="studentForm.name"
              placeholder="Nombres..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Apellidos"
              v-model="studentForm.lastName"
              placeholder="Apellidos..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <RadioGroupComponent
              label="Tipo documento"
              v-model="studentForm.idDocumentType"
              :items="parameterList1"
              itemText="description"
              itemValue="id"
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Nro. documento"
              v-model="studentForm.document"
              placeholder="Nro. documento..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Domicilio"
              v-model="studentForm.address"
              placeholder="Domicilio..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Contactos"
              v-model="studentForm.phone"
              placeholder="Contactos..." 
            />
          </v-col>
        </v-row>

        <FormGroupTitleComponent text="Usuario" />
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Nombre de usuario"
              v-model="studentForm.username"
              placeholder="Nombre de usuario..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Contraseña"
              v-model="studentForm.password"
              placeholder="Contraseña..." 
              :type="showPassword ? 'text' : 'password'"
              :icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
              @click-icon="showPassword = !showPassword"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6">
            <FormButtonComponent
              icon="fas fa-arrow-left"
              text="Regresar a alumnos"
              color="accentColor"
              textColor="infoColor"
              :route="{ name: 'student-list' }"
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

    <v-snackbar
      v-model="snackbar"
      :vertical="true"
      left
    >
      Successfull
      <template v-slot:action="{ attrs }">
        <v-btn
          color="indigo"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from "vuex";
import { PARAMETER_TYPE_TYPE_DOCUMENT } from "@/definitions/parameter_type_definition";
import { PARAMETER_DNI } from "@/definitions/parameter_definition";
export default Vue.extend({

  data: () => {
    return { 
      studentForm: {
        name: '',
        lastName: '',
        idDocumentType: PARAMETER_DNI,
        document: '',
        address: '',
        phone: '',
        username: '',
        password: '',
      },
      showPassword: false,
      snackbar: false
    }
  },

  async created(): Promise<void> {
    await this.getParameterList1(`?idParameterType=${ PARAMETER_TYPE_TYPE_DOCUMENT }`);
  },

  computed: {
    ...mapState('parameterModule', ['parameterList1'])
  },

  methods: {
    ...mapMutations('parameterModule', ['RESET_PARAMETER_LIST_1']),
    ...mapActions('parameterModule', ['getParameterList1']),
    ...mapActions('studentModule', ['saveStudent']),

    async save(): Promise<void> {
      
      await this.saveStudent(this.studentForm);
      this.snackbar = true;
      this.$router.push({ name: 'student-list' });
    }
  },

  beforeDestroy(): void {
    this.RESET_PARAMETER_LIST_1();
  }
});
</script>