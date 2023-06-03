<template>
  <footer class="footer">
    <div class="footer-content">
      <ul class="footer-content__list">
        <h3 class="footer-content__list--title">Reglas</h3>
        <li class="footer-content__list--item" @click="isActive = !isActive" v-for="(route, index) in rules" :key="index">
          <router-link :to="route.route">{{ route.name }}</router-link>
        </li>
      </ul>
      <ul class="footer-content__list">
        <h3 class="footer-content__list--title">Legal</h3>
        <li class="footer-content__list--item" @click="isActive = !isActive" v-for="(route, index) in legal" :key="index">
          <router-link :to="route.route">{{ route.name }}</router-link>
        </li>
      </ul>
      <ul class="footer-content__list">
        <h3 class="footer-content__list--title">Reglamentos</h3>
        <li class="footer-content__list--item" @click="isActive = !isActive" v-for="(route, index) in regulations" :key="index">
          <router-link :to="route.route">{{ route.name }}</router-link>
        </li>
      </ul>
      <ul class="footer-content__list">
        <h3 class="footer-content__list--title">Políticas de privacidad</h3>
        <li class="footer-content__list--item" @click="isActive = !isActive" v-for="(route, index) in privacy" :key="index">
          <router-link :to="route.route">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
    </footer>
</template>

<script>
  export default {
    name: "FooterComponent",
    setup() {
      return {
        routes: [
          {
            name       :  'sportsbook',
            route      :  'sportsbook'
          },
          {
            name       :  'live betting',
            route      :  'live-betting'
          },
          {
            name       :  'racebook',
            route      :  'racebook'
          },
          {
            name       :  'casino',
            route      :  'casino'
          },
          {
            name       :  'house rules',
            route      :  'house-rules'
          },
          {
            name       :  'sports rules',
            route      :  'sports-rules'
          },
        ],
        rules: [
          {
            name       :  'Reglas de casino',
            route      :  'reglas-casino'
          },
          // {
          //   name       :  'Reglas de deportes',
          //   route      :  'sports-rules'
          // },
          {
            name       :  'Reglas de la casa',
            route      :  'house-rules'
          },
        ],
        legal: [
          {
            name       :  'Terminos y condiciones',
            route      :  'terminos-condiciones'
          },
          {
            name       :  'Juego responsable',
            route      :  'juego-responsable'
          },
          {
            name       :  'Auto exclusión',
            route      :  'auto-exclusion'
          },
        ],
        regulations: [
          {
            name       :  'Política de reclamos',
            route      :  'politica-reclamos'
          },
          {
            name       :  'Política de anti lavado',
            route      :  'anti-lavado'
          },
          {
            name       :  'Juego justo',
            route      :  'juego-justo'
          },
        ],
        privacy: [
          {
            name       :  'Política de privacidad',
            route      :  'politica-privacidad'
          },
          {
            name       :  'Política de pago',
            route      :  'politica-pago'
          },
          {
            name       :  'Conozca a su cliente',
            route      :  'conozca-cliente'
          },
        ]
      }
    },
  };
</script>
