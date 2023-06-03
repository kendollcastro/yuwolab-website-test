<template>
  <div class="img-component">
    <router-link to="/sportsbook">
      <img class="img-component__img" :src="image" :alt="altImage">
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "ImageComponent",
    props: {
      image: String,
      altImage: String,
    },
  };
</script>
