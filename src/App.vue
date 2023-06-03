<template>
  <!-- <menuMobile></menuMobile> -->
  <header-component/>
  <router-view/>
  <footer-component/>
</template>

<script>
import headerComponent from "@/components/header.vue"
import FooterComponent from "@/components/footer.vue"
// import menuMobile from"@/components/mobile-menu.vue"

export default {
  name: 'App',
  components: {
    headerComponent,
    FooterComponent,
    // menuMobile
  },
  beforeUnmount() {
    window.onbeforeunload = () => null;
  }
}
</script>
