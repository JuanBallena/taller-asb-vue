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
        {{ item.fullName() }}
      </template>
      <template v-slot:[`item.hasDocumentCopy`]="{ item }">
        {{ item.hasDocumentCopyText() }}
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <ChipComponent 
          :text="item.getStatusText()"
          :color="item.getStatusColor()"
        />
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <ActionIconComponent 
          icon="fa-pen" 
          :route="{ name: 'student-edit', params: { id: item.id }}" 
        />
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Student } from '@/models/Student';

export default Vue.extend({

  props: {
    items: {
      default: () => [],
      type: Array as () => Array<Student>
    }
  },
  
  data: () => {
    return {
      headers: [
        { text: 'Alumno',     value: 'fullName' },
        { text: 'Nro. Doc.', value: 'document'},
        { text: 'Copia Doc.', value: 'hasDocumentCopy' },
        { text: 'Estado',    value: 'status' },
        { text: 'Acciones',    value: 'actions' },
      ],
    }
  },

});
</script>