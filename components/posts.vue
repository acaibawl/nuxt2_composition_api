<template>
  <ul>
    <li v-for="post in list" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

type Post = {
  id: number;
  title: string;
}

type Posts = Array<Post>;

export default defineComponent({
  name: 'PostVue',
  props: {
    list: {
      type: Array as PropType<Posts>,
      default: () => {},
      required: true,
    },
  },
  setup: () => {
    return {
    };
  },
});
</script>
