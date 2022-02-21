<template>
  <div id="app">
    <div>{{msg}}</div>
    <button @click="changeMessage">hello</button>
    <hello-world :msg="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'; // ★'vue'に代えてimport
import HelloWorld from '~/components/HelloWorld.vue';

export default defineComponent({
  name: 'CompositionVue',
  components: { HelloWorld },
  setup: () => {
    const msg = ref('Hello!');

    const changeMessage = () => {
      msg.value = 'What\'s up?';
    };

    return {
      msg,
      changeMessage,
    };
  },
});
</script>
