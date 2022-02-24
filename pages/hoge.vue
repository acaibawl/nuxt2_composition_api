<template>
  <div>
    <div>{{ title }}</div>
    <input-hoge />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import inputHoge from '~/components/inputHoge.vue';

export default Vue.extend({
  name: 'HogeVue',
  components: { inputHoge },
  computed: {
    title(): string {
      return this.$accessor.hoge.title
    },
  },
});
</script>
