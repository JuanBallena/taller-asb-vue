<template>
  <div>
    <TitleComponent text="Editar tema" />
    
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
            <SelectInputComponent
              label="Grupo permitido"
              v-model="themeForm.idAllowedGroup"
              :items="parameterList1"
              itemText="description"
              itemValue="id"
            />
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
import Vue from 'vue';
import { mapState, mapActions, mapMutations } from 'vuex';
import { PARAMETER_TYPE_ALLOWED_GROUP } from '@/definitions/parameter_type_definition';

export default Vue.extend({

  data: () => {
    return {
      themeForm: {
        id: -1,
        title: '',
        author: '',
        urlLocationYoutube: '',
        idAllowedGroup: -1
      }
    }
  },

  async created() {
    const idTheme = this.$route.params.id;
    await this.getTheme(idTheme);
    await this.getParameterList1(`?idParameterType=${ PARAMETER_TYPE_ALLOWED_GROUP }`)
    this.themeForm.id = this.theme.id;
    this.themeForm.title = this.theme.title;
    this.themeForm.author = this.theme.author;
    this.themeForm.urlLocationYoutube = this.theme.urlLocationYoutube;
    this.themeForm.idAllowedGroup = this.theme.allowedGroup.id;
  },

  computed: {
    ...mapState('themeModule', ['theme']),
    ...mapState('parameterModule', ['parameterList1']),
  },

  methods: {
    ...mapActions('themeModule', ['getTheme','updateTheme']),
    ...mapMutations('parameterModule', ['RESET_PARAMETER_LIST_1']),
    ...mapActions('parameterModule', ['getParameterList1']),

    async save(): Promise<void> {
      await this.updateTheme(this.themeForm);
      this.$router.push({ name: 'theme-list' })
    },
  },

  beforeDestroy() {
    this.RESET_PARAMETER_LIST_1();
  }
});
</script>