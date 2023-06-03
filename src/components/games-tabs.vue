<template>
  <div class="games-tabs">
    <div class="games-tabs__tabs">
      <button v-for="(tab, index) in tabs" :key="index" @click="activeTab = index" :class="{ 'is-active': activeTab === index }">
        {{ tab }}
      </button>
      <div>
      </div>
    </div>
    <div class="games-tabs__content">
      <slot :name="tabs[activeTab]"></slot>
      <div v-if="activeTab === 0">
        <slider-nuevo/>
      </div>
      <div v-if="activeTab === 1">
        <slider-recomendado/>
      </div>
      <div v-if="activeTab === 2">
        <slider-monedas/>
      </div>
      <div v-if="activeTab === 3">
        <slider-casino/>
      </div>
    </div>
    <div class="games-tabs__button">
      <button @click="openModal" class="primary-button primary-button__games">ver todos los juegos</button>
    </div>
  </div>
  <ModalComponent ref="modal"/>
</template>

<script>
import SliderNuevo from "@/components/slider-nuevo.vue"
import SliderRecomendado from "@/components/slider-recomendado.vue"
import SliderMonedas from "@/components/slider-monedas.vue"
import SliderCasino from "@/components/slider-casino.vue"
import ModalComponent from '@/components/modal.vue'

export default {
  name: "GamesTabs",
  components: {
    SliderNuevo,
    SliderRecomendado,
    SliderMonedas,
    SliderCasino,
    ModalComponent
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    }
  },
  data() {
    return {
      tabs: ['Nuevos', 'Recomendados', 'Tragamonedas', 'Casino en vivo'],
      activeTab: 0,
    };
  },
};
</script>
