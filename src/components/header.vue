<template>
  <header class="header">
    <div class="header-content max-container">
      <div class="header-content__nav">
        <div class="header-content__nav--img">
          <a href="/">
            <img class="header-content__img" src="../assets/images/yuwolab-logo.png" alt="mrs reels logo"/>
          </a>
        </div>
      </div>
      <!-- <ul class="header-content__info--list">
        <li class="header-content__info--list-item">
          <router-link to="casino">Casino</router-link>
        </li>
        <li class="header-content__info--list-item">
          <router-link to="/juegos-casino">Juegos de Casino</router-link>
        </li>
        <li class="header-content__info--list-item">
          <router-link to="/bingo">Bingo</router-link>
        </li>
        <li class="header-content__info--list-item">
          <router-link to="promotions">Promociones</router-link>
        </li>
      </ul> -->
      <a class="header-content__button primary-button primary-button__first" href="#">
        Agendar cita
        <span class="material-symbols-rounded">arrow_right_alt</span>
      </a>
      <!-- <SelectLenguage/> -->
      <!-- <div class="header-content__cta">
        <img src="../assets/images/spanish.png" alt="">
        <div class="header-buttons">
          <router-link to="/registrarme" class="btn-login secondary-button secondary-button__register">Registro</router-link>
          <a href="#" class="btn-login secondary-button secondary-button__betslip" @click="openModal">Iniciar sesión</a>
        </div>
      </div> -->
    </div>
    <ModalComponent ref="modal" />
  </header>
</template>

<script>
  import ModalComponent from '@/components/modal.vue'
  // import SelectLenguage from './select-lenguage.vue';
  // import MenuComponent from '@/components/menu.vue'

  export default {
    name: "HeaderComponent",
    components: {
      ModalComponent,
      // SelectLenguage,
      // MenuComponent
    },
    methods: {
      openModal() {
        this.$refs.modal.openModal();
      }
    },
    setup() {},
  };
</script>
