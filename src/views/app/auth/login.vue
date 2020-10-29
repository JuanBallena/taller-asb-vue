<template>
  <div class="gradient">
    <v-row>
      <v-col cols="12" lg="4" md="5" sm="8" class="mx-auto p-4">
        <v-card>
          <v-card-text class="login-container">
            <div class="login__name-ie">
              I.E. "Augusto Salazar Bondy" N°88047
            </div>

            <v-img :src="require('@/assets/insignia.jpg')" contain height="70"></v-img>

            <div class="login__welcome-text">
              Taller de música
            </div>

            <div class="login__title">
              Iniciar Sesión
            </div>

            <div class="login__input-username-container">
              <label class="login__label-username">Usuario</label>

              <v-text-field
                placeholder=" "
                outlined
                dense
                color="secondaryColor"
              >
              </v-text-field>
            </div>

            <div class="login__input-password-container">
              <label class="login__label-password">Contraseña</label>

              <v-text-field
                placeholder=" "
                :type="showPassword ? 'text' : 'password'"
                outlined
                dense
                color="secondaryColor"
              >
                <template v-slot:append>
                  <v-icon
                    small 
                    @click="showPassword = !showPassword" 
                    class="login__input-password__icon"
                  >
                    {{ showPassword ? 'fa-eye' : 'fa-eye-slash' }}
                  </v-icon>
                </template>
              </v-text-field>
            </div>

            <div class="login__submit-button-container">
              <RoundedButtonColorComponent
                block 
                routeName="inicio" 
                text="acceder"
                icon="fa-arrow-right"
                color="secondaryColor"
              />
            </div>

            <ContactSupportComponent />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  
  data: () => {
    return {
      showPassword: false
    }
  }
});
</script>

<style lang="sass" scoped>
.gradient 
  height: 100vh
  padding: 0 10px
  background-color: rgb(72,7,0)
  background-image: linear-gradient( rgb(72,7,0), rgb(99, 89, 90))
  align-items: center
  display: flex
  justify-content: center

.login-container
  padding: 20px 35px 8px 35px

.login__name-ie, .login__welcome-text
  color: var(--v-secondaryColor-base)

.login__name-ie
  text-align: center
  font-size: 13px
  font-weight: bold
  padding: 0 0 2px 0

.login__welcome-text
  text-align: center
  font-size: 18px
  font-weight: bold
  text-transform: uppercase
  margin: 25px 0

.login__title
  font-size: 12px
  font-weight: bold
  color: var(--v-secondaryColor-base)
  padding: 10px 0

.login__input-username-container, .login__input-password-container
  display: flex

.login__submit-button-container
  padding: 5px 0

.login__label-username, .login__label-password
  width: 100px
  padding: 9px 0 0 0
  font-size: 12px
  text-transform: uppercase

.login__input-password__icon
  color: var(--v-secondaryColor-base)
  padding: 4px 0 0 0

@media(max-width: 610px)
  .gradient
    display: block

  .login__welcome-text
    font-size: 14px

  .login__input-username-container, .login__input-password-container
    display: block

  .login__label-username, .login__label-password
    font-size: 11px

</style>