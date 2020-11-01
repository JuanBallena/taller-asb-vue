<template>
  <div>
    <TitleComponent text="Registrar tema" color="successColor" />

    <v-row>
      <v-col cols="12" lg="10" >

        <FormGroupTitleComponent text="Datos de tema" />
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6">
            <TextInputComponent
              label="Título"
              v-model="themeForm.title"
              placeholder="Título..."
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="6">
            <TextInputComponent
              label="Autor"
              v-model="themeForm.author"
              placeholder="Author..."
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="6">
            <TextInputComponent
              label="Link youtube"
              v-model="themeForm.urlLocationYoutube"
              placeholder="Link youtube..."
            />
          </v-col>

          <v-col cols="12" lg="6" md="6" sm="6">
            <label class="label">Grupo permitido</label>
            <v-select
              :items="optionList1"
              v-model="themeForm.idAllowedGroup"
              item-text="text"
              item-value="value"
              placeholder="Opciones"
              outlined
              dense
              color="infoColor"
              tile
              class="input-select"
              >
            </v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="6" md="6" sm="6">
            <FormButtonComponent
              text="Regresar a temas"
              icon="fas fa-arrow-left"
              color="accentColor"
              textColor="infoColor"
              :route="{ name: 'theme-list' }"
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
import Vue from "vue"
import { mapState, mapMutations, mapActions } from "vuex";
import { PARAMETER_TYPE_ALLOWED_GROUP } from '@/definitions/parameter_type_definition';
export default Vue.extend({
  
  data: () => {
    return {
      themeForm: {
        title: '',
        author: '',
        urlLocationYoutube: '',
        idAllowedGroup: -1
      }
    }
  },

  async created(): Promise<void> {
    await this.getParameterList1(`?idParameterType=${ PARAMETER_TYPE_ALLOWED_GROUP }`)
  },

  computed: {
    ...mapState('parameterModule', ['optionList1']),
  },

  methods: {
    ...mapMutations('parameterModule', ['RESET_OPTION_LIST_1']),
    ...mapActions('parameterModule', ['getParameterList1']),
    ...mapActions('themeModule', ['saveTheme']),

    async save(): Promise<void> {
      await this.saveTheme(this.themeForm);
      
    }
  },

  beforeDestroy(): void {
    this.RESET_OPTION_LIST_1();
  }
});
</script>

<style scoped>
.input-select {
  border-radius: 0;
  height: 42px;
  padding: 0;
  margin: 0;
  border: 1px solid var(--v-accentColor-base);
}

.v-text-field--outlined >>> fieldset {
  /* font-size: 14px; */
  color: var(--v-infoColor-base);
}

.input-select >>> .v-input__slot {
  font-size: 14px;
  /* color: var(--v-infoColor-base); */
}

.input-select >>> .v-select__slot input::placeholder {
  font-size: 14px;
  /* color: var(--v-infoColor-base); */
}

.label {
  font-size: 13px;
  color: var(--v-secondaryColor-base);
  font-weight: normal;
}
</style>