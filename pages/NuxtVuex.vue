<template>
  <div>
    <nuxt-add-todo />
    <nuxt-todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'; // ★'vue'に代えてimport

export default defineComponent({
  name: 'NuxtVuexVue',
  setup: () => {
    return {

    };
  },
});
</script>
