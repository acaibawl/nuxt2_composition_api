<template>
  <ul>
    <li v-for="(todo, index) in state.todoList.value" :key="index">
      {{ todo.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import state from '../store/store';

export default defineComponent({
  setup: () => {
    return {
      state,
    };
  },
});
</script>
