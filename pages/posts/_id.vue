<template>
  <div>
    <h1>記事個別ページ {{ post.id }}</h1>
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <p>メソッドで生成：{{ test().body }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Post } from '../../models/post';

export default Vue.extend({
  async asyncData({ $axios, params }) {
    const post: Post = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    return { post }
  },
  data() {
    return {
      post: {} as Post,
    }
  },
  // thisを使うのにveturでエラーを出さないために、headメソッドの戻り型をアノテーションする
  head(): {title: string} {
    return {
      title: this.post.title,
    }
  },
  methods: {
    // headメソッドと同じ理由で、メソッドの戻り型をアノテーションする
    test() :Post {
      const aaa = this.post;
      return aaa;
    },
  }
})
</script>
