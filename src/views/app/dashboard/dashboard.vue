<template>
  <div>
    <TitleComponent :text="`Bienvenido, ${username}`" />

    <v-row>
      <v-col cols="12">
        <ActivityCardComponent />
      </v-col>

      <v-col cols="12" lg="3" md="3" sm="6">
        <StatisticalCardComponent 
          value="125" 
          icon="fa-user-tie"
          description="Alumnos activos"
        />
      </v-col>

      <v-col cols="12" lg="3" md="3" sm="6">
        <StatisticalCardComponent 
          value="36"
          color="dangerColor"
          icon="fa-user-tie"
          description="Alumnos inactivos"
        />
      </v-col>

      <v-col cols="12" lg="3" md="3" sm="6">
        <StatisticalCardComponent 
          value="62" 
          icon="fa-user-graduate"
          description="Ex alumnos activos"
        />
      </v-col>

      <v-col cols="12" lg="3" md="3" sm="6">
        <StatisticalCardComponent 
          value="15"
          color="dangerColor"
          icon="fa-user-graduate"
          description="Ex alumnos inactivos"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ActivityCardComponent from "./activity_card.vue";
import StatisticalCardComponent from "./statistical_card.vue";

export default Vue.extend({
  data () {
    return {
      username: 'Juan Pablo',
    }
  },

  components: {
    StatisticalCardComponent,
    ActivityCardComponent
  }
});
</script>

