<template>
  <div>
    <li v-for="item in items" :key="item.id">
      <nuxt-link :to="`/notion/${item.id}`">{{ item.title }}</nuxt-link>
    </li>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NotionVue',
  async asyncData({ $axios, $config }) {
    const response = await $axios.get(
      `https://notion-api.splitbee.io/v1/table/${$config.notionId}`,{
        headers: {
           Authorization: `Bearer ${$config.notionToken}`
        },
      }
    );

    console.log(response.data);
    // とりあえずNotionとの疎通確認なのでtypeは定義していない。なのでVeturではエラーがでる
    return { items: response.data };
  },
  data() {
    return {
      items: [],
    };
  },
})
</script>
