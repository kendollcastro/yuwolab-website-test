<template>
  <div class="slot-slider">
    <Carousel class="slot-slider__slider slot-slider__list max-container" :settings="settings" :breakpoints="breakpoints" :touchDrag="false">
      <Slide v-for="(slide, index) in slides" :key="index">
        <div class="slot-slider__item" @click="openModal">
          <div class="slot-slider__item-img">
            <img :src="slide.image" loading="lazy" :alt="slide.alt">
          </div>
          <div class="slot-slider__item-info">
            <h4 class="slot-slider__item--heading">{{ slide.title }}</h4>
            <img class="slot-slider__item-info--img" src="../assets/images/casino-games/nucleus.png" alt="">
          </div>
        </div>
      </Slide>
      <template #addons>
        <div class="slot-slider__arrows">
          <Navigation />
        </div>
      </template>
    </Carousel>
    <div class="slot-slider__grid">
      <div class="slot-slider__grid-content" v-for="(slide, index) in slides" :key="index">
        <div class="slot-slider__item" @click="openModal">
          <div class="slot-slider__item-img">
            <img :src="slide.image" loading="lazy" :alt="slide.alt">
          </div>
          <div class="slot-slider__item-info">
            <h4 class="slot-slider__item--heading">{{ slide.title }}</h4>
            <img class="slot-slider__item-info--img" src="../assets/images/casino-games/nucleus.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <ModalComponent ref="modal" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import ModalComponent from '@/components/modal.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'SliderRecomendado',
  components: {
    Carousel,
    Slide,
    Navigation,
    ModalComponent
  },
  methods: {
    openModal() {
      this.$refs.modal.openModal();
    }
  },
  mounted() {
  this.$nextTick(() => {
      const carousel = this.$refs.carousel;
      if (carousel) {
        carousel.$carousel.set({ 
          touchDrag: { 
            passive: true 
          },
          wheel: {
            passive: true
          }
        }, true); // note the second parameter here, it forces the carousel to re-render after changing settings
      }
    })
  },

  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 2.1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      500: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 700px and up
      800: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 6,
        snapAlign: 'center',
      },
    },

    slides: [
      {
        title      :  'American blackjack',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/american-blackjack.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'European roulette',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/europan-roulette.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Fruit party',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/fruit-party.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'jungle stripes',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/jungle-stripes.jpg'),
        alt        :  'Lorem ipsum',
      }
      ,
      {
        title      :  'giovanni gems',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/giovannis-gems.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Gates of olympus',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/gates-olympus.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Quest to the west',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/quest-west.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Stacked',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/stacked.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'Dog house',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/dog-house.jpg'),
        alt        :  'Lorem ipsum',
      },
      {
        title      :  'baccarat',
        subtitle   :  'Provider',
        image      :  require('@/assets/images/casino-games/baccarat.jpg'),
        alt        :  'Lorem ipsum',
      }
    ]
  }),
})
</script>
