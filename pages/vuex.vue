<template>
  <div id='vuex'></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'; // ★'vue'に代えてimport
import AddTodo from '../components/addTodo';
import TodoList from '../components/todoList';

if (process.browser) {
  const app = document.querySelector('#vuex');
  if (app !== null){
    app.appendChild(new AddTodo().render());
    app.appendChild(new TodoList().render());
  }
}

export default defineComponent({
  name: 'VuexVue',
  setup: () => {

  }
});

</script>
