<template>
  <v-list dense class="menu">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="menu__title">
          Taller asb
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item-group active-class="">
      <ItemMenuComponent icon="fa-home" text="Inicio" routeName="dashboard" />

      <ItemMenuComponent icon="fa-user-tie" text="Alumnos" routeName="student-list" />

      <ItemMenuComponent icon="fa-user-graduate" text="Ex alumnos" routeName="ex-student-list" />

      <ItemMenuComponent icon="fa-calendar-day" text="Actividades" routeName="activities-list" />

      <ItemMenuComponent icon="fa-file-audio" text="Temas" routeName="theme-list" />

      <ItemMenuComponent icon="fa-handshake" text="Asignaciones" routeName="dashboard" />

      <ItemMenuComponent icon="fa-boxes" text="Inventario" routeName="dashboard" />

      <ItemMenuComponent icon="fa-users" text="Usuarios" routeName="user-list" />
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue';
import ItemMenuComponent from "./ItemMenu.vue";

export default Vue.extend({
  data () {
    return {
      drawer: false,
    }
  },

  components: {
    ItemMenuComponent
  }
});
</script>

<style lang="sass" scoped>

.menu
  padding: 0 10px

.menu__title
  color: white
  text-transform: uppercase

</style>

