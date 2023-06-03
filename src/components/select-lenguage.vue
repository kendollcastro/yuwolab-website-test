<template>
  <div>
    <img src="../assets/images/spanish.png" alt="">
    <label for="lenguages">Lenguage:</label>
    <select id="lenguages" v-model="selectedLenguage">
      <option value="spanish">
        <img src="../assets/images/spanish.png" alt="">
        Hola mundo
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectLenguage",
  data() {
    return {
      selectedLenguage: ''
    }
  }
}
</script>
