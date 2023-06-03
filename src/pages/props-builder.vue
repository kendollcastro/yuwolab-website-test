<template>
  <iframe title="prop builder" class="liveBettingIframe iframe-general-top" :src="`https://bv2.digitalsportstech.com/betbuilder?sb=jazz&amp;theme=${BackEndUrl}`" width="100%" height="900px"></iframe>
</template>

<script>
  export default {
    name: "PropsBuilderPage",

    setup:() => {
      const BackEndUrl = "betcasino";
      
      return {
        BackEndUrl,
      }
    },
  }
</script>