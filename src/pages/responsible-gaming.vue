<template>
  <div class="rules-page max-container">
    <h1 class="rules-page__heading">{{ dataList.title_header }}</h1>
    <ul class="rules-page__list">
      <li class="rules-page__list-item" v-for="(rule, index) in dataList.rules_body" :key="index">
        {{ rule.desc }}
        <ul class="rules-page__sublist" v-if="rule.list.length">
          <li class="rules-page__sublist-item" v-for="(listItem, listIndex) in rule.list" :key="listIndex">
            <p>{{ listItem.desc }}</p>
            <ul v-if="listItem.list.length">
              <li v-for="(subListItem, subListIndex) in listItem.list" :key="subListIndex">
                <p>{{ subListItem.desc }}</p>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ResponsibleGaming",

    data() {
      return {
        dataList: []
      };
    },
    async created() {
      const response = await fetch('https://creatiapps.com/jazz/json.php');
      this.dataList = await response.json();
      console.log(this.dataList);
    }
  };
</script>

