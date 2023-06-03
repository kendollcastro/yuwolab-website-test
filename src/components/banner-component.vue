<template>
  <div class="banner">
    <div class="banner__content">
      <img :src="image" :alt="altImage">
    </div>
  </div>
</template>

<script>
  export default {
    name: "BannerComponent",
    props: {
      image: String,
      altImage: String,
    },
  };
</script>
