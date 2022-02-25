<template>
  <div class="container">
    <posts
      :list="posts"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import posts from "~/components/posts.vue";

type Post = {
  id: number;
  title: string;
}

export default Vue.extend({
  name: 'ObjectApiVue',
  components: { posts },
  setup:() => {

    return {
    };
  },
  async asyncData({ $axios }) {
    const posts: Post[] = await $axios.$get("https://jsonplaceholder.typicode.com/posts/");
    return {
      posts,
    };
  },
  // typescriptに変数の型を教える為にdataで同じ変数を宣言
  data: () => {
    return {
      /** @type {Post[] | null} */
      posts: null
    };
  },
  head: {
    title: "Sample"
  },
});
</script>
