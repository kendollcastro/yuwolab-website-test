<template>
  <iframe title="Live betting" class="liveBettingIframe iframe-general-top" :src="`https://plive.jazzsports.ag/live/?skin=${skinStyle}#!/sport/2`" width="100%" height="900" frameborder="no"></iframe>
</template>

<script>
  export default {
    name: "SportsPage",

    setup:() => {
      const skinStyle = "jazzsports";

      /* Live Wager Skins 
    
      Variable: jazzsports
      Color: Sky blue on dark gray
      ***************************************

      Variable: sportbet
      Color: Green on dark gray
      ***************************************

      Variable: perubetpe
      Color: Red on dark gray
      ***************************************

      Variable: apuestamx
      Color: Green on white
      ***************************************

      Variable: looselines
      Color: Gray on white
      ***************************************

      Variable: mysportsbook
      Color: Blue on white
      ***************************************

      Variable: mysportsbook
      Color: Blue on white
      ***************************************

      Variable: betswing
      Color: Orange on dark gray
      ***************************************

      Variable: kaposbet
      Color: Esmerald green on dark gray
      ***************************************

      Variable: betcasino168
      Color: Gold on dark gray
      ***************************************

      Variable: abcislands
      Color: Red blood on white
      ***************************************
      
      */
      
      return {
        skinStyle,
      }
    },
  }
</script>