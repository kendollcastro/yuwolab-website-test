<template>
  <hero-slider />
  <services-component/>
  <about-component/>
  <schedule-component/>
  <!-- <games-tabs/> -->
  <!-- <slider-nuevo/> -->
  <!-- <image-component /> -->
  <!-- <banner-component :image="image" altImage="Slider image" /> -->
  <!-- <banner-info /> -->
</template>

<script>
import HeroSlider from "@/components/hero-slider.vue";
// import GamesTabs from "@/components/games-tabs.vue";
// import SliderNuevo from '@/components/slider-nuevo.vue'
// import BannerComponent from "@/components/banner-component.vue";
// import BannerInfo from "@/components/banner-info.vue";
// import ImageComponent from "@/components/brands-component.vue";
import ServicesComponent from "@/components/services.vue";
import AboutComponent from "@/components/about.vue";
import ScheduleComponent from "@/components/schedule.vue";

export default {
  name: "PageHome",
  components: {
    HeroSlider,
    // SliderNuevo,
    // GamesTabs,
    // BannerComponent,
    // ImageComponent,
    // BannerInfo,
    ServicesComponent,
    AboutComponent,
    ScheduleComponent,
  },

  setup: () => {
    /* Hero Banner Variables */
    const image = require("@/assets/images/logo.png");
    return {
      image,
    };
  },
};
</script>