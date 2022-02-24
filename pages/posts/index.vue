<template>
  <div>
    <h1>記事一覧</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '../../models/post';

export default Vue.extend({
  name: 'PostIndexVue',
  async asyncData({ $axios }) {
    const posts: Post[] = await $axios.$get("https://jsonplaceholder.typicode.com/posts/");
    return { posts };
  },
  data() {
    return {
      posts: [] as Post[],
    };
  },
})
</script>
