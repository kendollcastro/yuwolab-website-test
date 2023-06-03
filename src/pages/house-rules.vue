<template>
  <div class="rules-page max-container">
    <h1 class="rules-page__heading">{{ dataList.title_header }}</h1>
    <div class="rules-page__list" v-for="rule in dataList.rules_body" :key="rule.desc">
      <ol class="rules-page__sublist" v-if="rule.list">
        <li class="rules-page__sublist-item" v-for="subrule in rule.list" :key="subrule.desc">
          <p v-html="getTexto(subrule.desc)"></p>
          <template v-if="subrule.list.length > 0">
            <ol class="sport-rules__details--list" v-if="subrule.list[0].type =='word'" type="A">
                <li class="sport-rules__details--list-item" v-for="(li,index) in  subrule.list" :key="index">
                  <span v-if="li.desc" v-html="li.desc"></span>
                </li>
            </ol>
          </template>
          <template v-if="subrule.list.length > 0">
            <ul class="sport-rules__details--list" v-if="subrule.list[0].type =='point'">
                <li class="sport-rules__details--list-item" v-for="(li,index) in  subrule.list" :key="index">
                  <span v-if="li.desc" v-html="li.desc"></span>
                </li>
            </ul>
          </template>
        </li>
      </ol>
      <h2 v-else-if="rule.Subtitle" v-html="rule.Subtitle"></h2>
      <p v-else v-html="getTexto(rule)"></p>
    </div>
  </div>
</template>
<script>
import { reactive, watch } from 'vue';

export default {
  name: "HouseRules",

  setup() {
    const state = reactive({
      dataList: {},
      valorReemplazo: "mrsreels.com"
    });

    const getTexto = (desc) => {
      const dato = desc;
      const nuevaCadena = dato.replace(/Title_Sitio/g, `${state.valorReemplazo}`);
      return nuevaCadena;
    };

    const dataList = reactive({
      title_header: '',
      rules_body: []
    });

    const loadData = async () => {
      const cachedData = JSON.parse(localStorage.getItem('cachedData') || '{}');
      if (cachedData && cachedData.fileName === 'rules_house_es') {
        dataList.title_header = cachedData.title_header;
        dataList.rules_body = cachedData.rules_body;
      } else {
        const response = await fetch(process.env.VUE_APP_API_URL + '?fileName=rules_house_es');
        const data = await response.json();
        dataList.title_header = data.title_header;
        dataList.rules_body = data.rules_body;
        localStorage.setItem('cachedData', JSON.stringify({ fileName: 'rules_house_es', ...data }));
      }
    };

    watch(() => state.valorReemplazo, () => {
      dataList.rules_body.forEach((rule) => {
        rule.list.forEach((subrule) => {
          subrule.desc = getTexto(subrule.desc);
        });
      });
    });

    loadData();

    return {
      dataList,
      getTexto,
      state
    };
  }
};
</script>