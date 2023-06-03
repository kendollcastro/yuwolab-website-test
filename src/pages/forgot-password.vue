<template>
  <iframe title="forgot pass" class="iframe-margin-top m-auto p-auto d-flex" :src="`https://betslip.${BackEndUrl}/home/reset-pass`" name="iframe_cards" width="100%" height="900px"></iframe>
</template>

<script>
  export default {
    name: "ForgotPassword",
    setup:() => {
      const BackEndUrl = "mrsreels.com";
      
      return {
        BackEndUrl,
      }
    },
  }
</script>