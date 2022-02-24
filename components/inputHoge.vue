<template>
  <input @input="(e) => handleInput(e.target.value)" >
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'InputHogeVue',
  methods: {
    handleInput(title: string) {
      this.$accessor.hoge.setTitle(title);
    }
  }
})
</script>
