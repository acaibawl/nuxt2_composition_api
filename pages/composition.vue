<template>
  <div id="app">
    <div>{{msg}}</div>
    <button @click="changeMessage">hello</button>
    <hello-world :msg="msg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@vue/composition-api'; // ★'vue'に代えてimport
import HelloWorld from '~/components/HelloWorld.vue';

export default defineComponent({
  name: 'CompositionVue',
  components: { HelloWorld },
  setup: () => {
    const msg = ref('Hello!');

    const changeMessage = () => {
      msg.value = 'What\'s up?';
    };

    watch(msg, () => {
      console.log('msg is chenged!');
    });

    return {
      msg,
      changeMessage,
    };
  },
});
</script>
