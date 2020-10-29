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
      <template v-slot:[`item.status`]="{ item }">
        <ChipComponent 
          :text="item.status.description"
          :color="item.getStatusColor()"
        />
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <ActionIconComponent 
          icon="fa-pen"
          :route="{ name: 'user-edit', params: { id: item.id } }"
        />
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from "@/models/User"

export default Vue.extend({

  props: {
    items: {
      default: () => [],
      type: Array as () => Array<User>
    }
  },
  
  data: () => {
    return {
      headers: [
        { text: 'Usuario', value: 'username' },
        { text: 'Rol', value: 'role.displayName'},
        { text: 'Estado', value: 'status' },
        { text: 'Acciones', value: 'actions' },
      ],
    }
  },
});
</script>