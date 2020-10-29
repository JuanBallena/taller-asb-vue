<template>
  <div>
    <v-row id="style__row">
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <TitleComponent text="Actividades" />

        <div class="style__row__col__div">
          <RoundedButtonComponent text="Nuevo" :route="{ name: 'student-create' }" />
        </div>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="6" class="style__row__col">
        <SearchInputComponent />
      </v-col>
    </v-row>
  </div>  
</template>