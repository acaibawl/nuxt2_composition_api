<template>
  <div class="container">
    <p>{{ reactiveData.text }}</p>
    <button @click="handleClick">ボタン</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";

export default defineComponent({
  name: 'NuxtCompositionVue',
  setup:() => {
    const reactiveData = reactive({
      text: ""
    });

    reactiveData.text = "まだ押されていません"
    const handleClick = () => {
      reactiveData.text = "押されたよ！"
    };

    return {
      reactiveData,
      handleClick
    };
  },
  head: {
    title: "Sample"
  },
});
</script>
