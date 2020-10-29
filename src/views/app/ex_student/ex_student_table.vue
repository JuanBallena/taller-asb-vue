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
      <template v-slot:[`item.fullName`]="{ item }">
        {{ item.lastName}} {{ item.name }}
      </template>
      <template v-slot:[`item.promotion`]="{ item }">
        {{ item.promotion || "No definido" }}
      </template>
      <template v-slot:[`item.hasDocumentCopy`]="{ item }">
        {{ item.hasDocumentCopy ? "Si" : "No" }}
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <ChipComponent 
          :text="item.status.description"
          :color="getStatusColor(item.status.id)"
        />
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <ActionIconComponent 
          icon="fa-pen" 
          :route="{ name: 'ex-student-edit', params: { id: item.id }}"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ExStudent } from '@/interfaces/ExStudent';
import * as exStudent from '@/functions/ex_student';

export default Vue.extend({

  props: {
    items: {
      default: () => [],
      type: Array as () => Array<ExStudent>
    }
  },
  
  data: () => {
    return {
      headers: [
        { text: 'Nombres',     value: 'fullName' },
        { text: 'Promoción', value: 'promotion'},
        { text: 'Nro. Doc.', value: 'document'},
        { text: 'Copia Doc.', value: 'hasDocumentCopy' },
        { text: 'Estado',    value: 'status' },
        { text: 'Acciones',    value: 'actions' },
      ],
    }
  },

  methods: {
    getStatusColor(idStatus: number): string {
      return exStudent.getStatusColor(idStatus);
    }
  }

});
</script>