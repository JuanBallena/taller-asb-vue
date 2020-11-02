<template>
  <div>
    <TitleComponent text="Editar ex alumno" color="successColor" />
    
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
              :items="parameterList1"
              itemText="description"
              itemValue="id"
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

          <v-col cols="12" lg="6" md="6" sm="6">
            <SwitchInputComponent
              v-model="exStudentForm.hasDocumentCopy"
              label="Copia de DNI"
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
import Vue from 'vue';
import { mapState, mapMutations, mapActions } from 'vuex';
import { PARAMETER_TYPE_TYPE_DOCUMENT } from '@/definitions/parameter_type_definition';

export default Vue.extend({

  data: () => {
    return {
      exStudentForm: {
        id: -1,
        name: '',
        lastName: '',
        idDocumentType: -1,
        document: '',
        address: '',
        phone: '',
        promotion: '',
        hasDocumentCopy: false
      },
    }
  },

  async created() {
    const idExStudent = this.$route.params.id;
    await this.getExStudent(idExStudent);
    await this.getParameterList1(`?idParameterType=${ PARAMETER_TYPE_TYPE_DOCUMENT }`);

    this.exStudentForm.id = this.exStudent.id;
    this.exStudentForm.name = this.exStudent.name;
    this.exStudentForm.lastName = this.exStudent.lastName;
    this.exStudentForm.idDocumentType = this.exStudent.documentType.id;
    this.exStudentForm.document = this.exStudent.document;
    this.exStudentForm.address = this.exStudent.address;
    this.exStudentForm.phone =  this.exStudent.phone;
    this.exStudentForm.promotion =  this.exStudent.promotion;
    this.exStudentForm.hasDocumentCopy = this.exStudent.hasDocumentCopy;

  },

  computed: {
    ...mapState('exStudentModule', ['exStudent']),
    ...mapState('parameterModule', ['parameterList1']),
  },

  methods: {
    ...mapMutations('parameterModule', ['RESET_PARAMETER_LIST_1']),
    ...mapActions('exStudentModule', ['getExStudent','updateExStudent']),
    ...mapActions('parameterModule', ['getParameterList1']),
    
     async save(): Promise<void> {

      await this.updateExStudent(this.exStudentForm);
      this.$router.push({ name: 'ex-student-list' });
    }
  },

  beforeDestroy() {
    this.RESET_PARAMETER_LIST_1();
  }
});
</script>