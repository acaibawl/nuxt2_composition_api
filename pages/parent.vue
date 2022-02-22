<template>
  <div>
    <h1>{{ state.message }}</h1>
    <child
      :msg="state.message"
      @change-message='changeMessage'
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, onUpdated, onUnmounted } from "@vue/composition-api";
import child from "~/components/child.vue";

export default defineComponent({
  name: 'ParentVue',
  components: { child },
  setup: () => {
    const state = reactive({
      message: 'Hello',
    });

    const changeMessage = (message: string) => {
      state.message = message;
    };

    // ライフサイクルフック
    onMounted(() => {
      console.log('mounted!');
    });

    onUpdated(() => {
      console.log('updated!');
    });

    onUnmounted(() => {
      console.log('unmounted!');
    });

    return {
      state,
      changeMessage,
    }
  }
})
</script>
