<template>
  <div class="mobile-menu" v-bind:class="{ 'hidden-mobile': !showComponent }">
    <div class="mobile-menu__container">
      <router-link class="mobile-menu__item" to="/casino">
        <img class="mobile-menu__item-casino" src="../assets/images/icons/casino.svg" alt="">
        <span>Casino</span>
      </router-link>
      <router-link class="mobile-menu__item" to="/casino">
        <img class="mobile-menu__item-casinogames" src="../assets/images/icons/casino-games.svg" alt="">
        <span>Juegos de Casino</span>
      </router-link>
      <router-link class="mobile-menu__item" to="/casino">
        <img class="mobile-menu__item-bingo" src="../assets/images/icons/bingo.svg" alt="">
        <span>Bingo</span>
      </router-link>
      <router-link class="mobile-menu__item" to="/promotions">
        <img class="mobile-menu__item-promo" src="../assets/images/icons/promo.svg" alt="">
        <span>Promociones</span>
      </router-link>
    </div>
    <!-- <div class="mobile-menu__buttons" @click="openModalClassic">
      <span class="material-symbols-rounded">person</span>
      <a href="#" class="btn-login secondary-button mobile-menu__login">Classic</a>
    </div>
    <div class="mobile-menu__buttons" @click="openModal">
      <span class="material-symbols-rounded">person</span>
      <a href="#" class="btn-login secondary-button mobile-menu__login">Betslip</a>
    </div> -->
    <menu-component />
    <!-- <ModalComponent ref="modal" />
    <ModalClassicComponent ref="modalClassic" /> -->
  </div>
</template>
  
<script>
  // import MenuComponent from '@/components/menu.vue'
  // import ModalComponent from '@/components/modal.vue'
  // import ModalClassicComponent from '@/components/modal-classic.vue'

  export default {
    name: 'MobileMenu',
    showComponent: true,
    components: {
      // MenuComponent,
      // ModalComponent,
      // ModalClassicComponent
    },
    // methods: {
    //   openModal() {
    //     this.$refs.modal.openModal();
    //   },
    //   openModalClassic() {
    //     this.$refs.modalClassic.openModalClassic();
    //   }
    // },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        isOpen: false
      }
    }
  };
</script>