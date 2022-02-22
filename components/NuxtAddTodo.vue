<template>
  <div>
    <input v-model="newTitle" />
    <button @click="() => handleAddTodo(newTitle)">
      Add a task
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { addTodo } from '../store/store';

export default defineComponent({
  setup: () => {
    const newTitle = ref('');
    const handleAddTodo = (title: string) => {
      addTodo(title);
      newTitle.value = '';
    };

    return {
      newTitle,
      handleAddTodo,
    };
  },
});
</script>

<style scoped>
input {
  color: white;
}
</style>
