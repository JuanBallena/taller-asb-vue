<template>
  <v-card class="activity-card" elevation="0" tile>
    <v-card-text class="activity-card__container">
      <div class="activity-card__title">
        PRÓXIMA ACTIVIDAD

        <v-icon
          class="activity-card__icon-caret-rigth" 
          small>
          fa-caret-right
        </v-icon>

        CONCURSO
      </div>

      <div class="activity-card__description">
        CONCURSO DE BANDAS RÍTMICAS ORGANIZADO POR 
        LA I.E. INMACULADA DE LA MERCED
      </div>

      <div class="activity-card__data-container">
        <ItemListComponent 
          icon="fa-calendar-day" 
          text="Lunes 15 de mayo 2020"
        />

        <ItemListComponent 
          icon="fa-street-view" 
          text="Concentración 11:00 am, I.E. Augusto Salazar bondy" 
        />

        <ItemListComponent 
          icon="fa-clock" 
          text="Desarrollo 2:00 pm - 6:00 pm, Patio deportivo I.E. Inmaculada de la Merced" 
        />
      </div>

      <RoundedButtonColorComponent small text="Ver convocatoria" />
    </v-card-text>
  </v-card>
</template>

<style lang="sass" scoped>

.activity-card
  background: var(--v-accentColor-base)

.activity-card__container
  padding: 15px 20px 25px 20px

.activity-card__title 
  font-size: 13px
  margin: 0 0 10px 0
  font-weight: bold

.activity-card__icon-caret-rigth 
  width: 22px
  padding: 0 0 1px 0

.activity-card__description 
  font-size: 20px
  line-height: 1.2
  text-align: justify
  color: var(--v-primaryColor-base)

.activity-card__data-container
  margin: 26px 0

</style>