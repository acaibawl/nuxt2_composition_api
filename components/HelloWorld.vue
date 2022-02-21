<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ upperMsg }}</h1>
    <div>({{x}}, {{y}})</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import { useMousePosition } from '@/util/mouse';

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

    // 外部moduleを利用する
    const {x, y} = useMousePosition();

    return {
      upperMsg,
      x,
      y,
    };
  },
});
</script>
<!-- styleは省略 -->
