<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ upperMsg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

interface Props {
  msg: string;
}

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: 'Hello, world.',
    },
  },
  setup: (props: Props) => {
    const upperMsg = computed(() => props.msg.toUpperCase());

    return {
      upperMsg,
    };
  },
});
</script>
<!-- styleは省略 -->
