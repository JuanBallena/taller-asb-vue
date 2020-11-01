<template>
  <div id="style__table-container">
    <v-data-table
      :headers="headers"
      :items="items"
      disable-sort
      id="table"
      class="elevation-1"
      hide-default-footer
      no-data-text="Sin resultados"
      no-results-text="Sin resultados"
      disable-pagination
    >
      <template v-slot:[`item.allowedGroup`]="{ item }">
          {{ item.allowedGroup.description }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <ActionIconComponent 
          icon="fa-pen"
          :route="{ name: 'theme-edit', params: { id: item.id } }"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Theme } from '@/models/Theme';

export default Vue.extend({

  props: {
    items: {
      default: () => [],
      type: Array as () => Array<Theme>
    }
  },
  
  data: () => {
    return {
      headers: [
        { text: 'Titulo',     value: 'title' },
        { text: 'Autor.', value: 'author'},
        { text: 'Grupo permitido',    value: 'allowedGroup' },
        { text: 'Acciones',    value: 'actions' },
      ],
    }
  },

  methods: {
    // getStatusText(item: Student): string {
    //   return student.getStatusText(item);
    // },
  }

});
</script>