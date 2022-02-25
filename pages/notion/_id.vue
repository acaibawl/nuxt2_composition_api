<template>
  <NotionRenderer :block-map="blockMap" full-page />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NotionPageVue',
  async asyncData({ $notion, params }) {
    const blockMap = await $notion.getPageBlocks(params.id);
    return { blockMap };
  },
  data: () => ({ blockMap: null }),
  mounted() {
  }
})
</script>

<style>
@import "vue-notion/src/styles.css"; /* optional Notion-like styles */
</style>
