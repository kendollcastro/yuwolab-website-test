<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-content__info">
        <h1 class="hero-content__info-heading">Obtenga un diseño impactante para su sitio web</h1>
        <p class="hero-content__info-text">Nuestro equipo le ayudará a hacer crecer su negocio de la manera correcta.</p>
        <a class="primary-button primary-button__second" href="#">Ver proyectos</a>
      </div>
      <div class="hero-content__img">
        <img src="../assets/images/hero-slider.svg" alt="">
      </div>
    </div>
  </section>
  <ModalComponent ref="modal" />
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide } from 'vue3-carousel'
import ModalComponent from '@/components/modal.vue'

export default {
  name: 'Hero-Basic',
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    ModalComponent
  },
    methods: {
      openModal() {
        this.$refs.modal.openModal();
      }
  },
  data() {

  }
}
</script>
