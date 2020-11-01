<template>
  <div>
    <TitleComponent text="Registrar ex alumno" color="successColor" />
    
    <v-row>
      <v-col cols="12" lg="10" md="10" sm="10">
        <FormGroupTitleComponent text="Datos personales" />
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Nombres"
              v-model="exStudentForm.name"
              placeholder="Nombres..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Apellidos"
              v-model="exStudentForm.lastName"
              placeholder="Apellidos..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <RadioGroupComponent
              label="Tipo documento"
              v-model="exStudentForm.idDocumentType"
              :items="optionList1"
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Nro. documento"
              v-model="exStudentForm.document"
              placeholder="Nro. documento..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Domicilio"
              v-model="exStudentForm.address"
              placeholder="Domicilio..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Contactos"
              v-model="exStudentForm.phone"
              placeholder="Contactos..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Promoción"
              v-model="exStudentForm.promotion"
              placeholder="Promoción..." 
            />
          </v-col>
        </v-row>

        <FormGroupTitleComponent text="Usuario" />
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Nombre de usuario"
              v-model="exStudentForm.username"
              placeholder="Nombre de usuario..." 
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="12">
            <TextInputComponent
              label="Contraseña"
              v-model="exStudentForm.password"
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
              text="Regresar a ex alumnos"
              color="accentColor"
              textColor="infoColor"
              :route="{ name: 'ex-student-list' }"
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
import { mapState, mapMutations, mapActions } from "vuex";
import { PARAMETER_TYPE_TYPE_DOCUMENT } from "@/definitions/parameter_type_definition";
import { PARAMETER_DNI } from "@/definitions/parameter_definition";
export default Vue.extend({

  data: () => {
    return { 
      exStudentForm: {
        name: '',
        lastName: '',
        idDocumentType: PARAMETER_DNI,
        document: '',
        address: '',
        phone: '',
        promotion: '',
        username: '',
        password: '',
      },
      showPassword: false
    }
  },

  async created(): Promise<void> {
    await this.getParameterList1(`?idParameterType=${ PARAMETER_TYPE_TYPE_DOCUMENT }`);
  },

  computed: {
    ...mapState('parameterModule', ['optionList1'])
  },

  methods: {
    ...mapMutations('parameterModule', ['RESET_OPTION_LIST_1']),
    ...mapActions('parameterModule', ['getParameterList1']),
    ...mapActions('exStudentModule', ['saveExStudent']),

    async save(): Promise<void> {
      
      await this.saveExStudent(this.exStudentForm);
      this.$router.push({ name: 'ex-student-list' });
    }
  },

  beforeDestroy(): void{
    this.RESET_OPTION_LIST_1();
  }
});
</script>