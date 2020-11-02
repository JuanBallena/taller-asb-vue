<template>
  <div>
    <TitleComponent text="Editar alumno" color="successColor" />
    
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

          <v-col cols="12" lg="3" md="3" sm="6">
            <SwitchInputComponent
              v-model="studentForm.suspended"
              label="Suspendido"
              :disabled="studentInactive"
            />
          </v-col>

          <v-col cols="12" lg="3" md="3" sm="6">
            <SwitchInputComponent
              v-model="studentForm.hasDocumentCopy"
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions, mapMutations } from 'vuex';
import { PARAMETER_INACTIVE } from '@/definitions/parameter_definition';
import { PARAMETER_TYPE_TYPE_DOCUMENT } from '@/definitions/parameter_type_definition';

export default Vue.extend({

  data: () => {
    return {
      studentForm: {
        id: -1,
        name: '',
        lastName: '',
        idDocumentType: -1,
        document: '',
        address: '',
        phone: '',
        hasDocumentCopy: false,
        suspended: false,
      },
      idStatus: -1
    }
  },

  async created() {
    const idStudent = this.$route.params.id;
    await this.getStudent(idStudent);
    await this.getParameterList1(`?idParameterType=${ PARAMETER_TYPE_TYPE_DOCUMENT }`);

    this.studentForm.id = this.student.id;
    this.studentForm.name = this.student.name;
    this.studentForm.lastName = this.student.lastName;
    this.studentForm.idDocumentType = this.student.documentType.id;
    this.studentForm.document = this.student.document;
    this.studentForm.address = this.student.address;
    this.studentForm.phone =  this.student.phone;
    this.studentForm.hasDocumentCopy =  this.student.hasDocumentCopy;
    this.studentForm.suspended =  this.student.suspended;
    this.idStatus = this.student.status.id;
  },

  computed: {
    ...mapState('studentModule', ['student']),
    ...mapState('parameterModule', ['parameterList1']),

    studentInactive(): boolean {
      return this.idStatus == PARAMETER_INACTIVE;
    }
  },

  methods: {
    ...mapMutations('parameterModule', ['RESET_PARAMETER_LIST_1']),
    ...mapActions('studentModule', ['getStudent','updateStudent']),
    ...mapActions('parameterModule', ['getParameterList1']),

    async save(): Promise<void> {

      await this.updateStudent(this.studentForm);
      this.$router.push({ name: 'student-list' });
    }

  },

  beforeDestroy() {
    this.RESET_PARAMETER_LIST_1();
  }
});
</script>